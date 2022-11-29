package seb40main026.mainproject.question.service;

import lombok.RequiredArgsConstructor;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import seb40main026.mainproject.exception.BusinessException;
import seb40main026.mainproject.exception.ExceptionCode;
import seb40main026.mainproject.image.entity.Image;
import seb40main026.mainproject.image.service.ImageService;
import seb40main026.mainproject.member.entity.Member;
import seb40main026.mainproject.member.service.MemberServiceImpl;
import seb40main026.mainproject.question.dto.QuestionDto;
import seb40main026.mainproject.question.entity.Question;
import seb40main026.mainproject.question.entity.QuestionLike;
import seb40main026.mainproject.question.mapper.QuestionMapper;
import seb40main026.mainproject.question.repository.QuestionLikeRepository;
import seb40main026.mainproject.question.repository.QuestionRepository;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionMapper mapper;
    private final QuestionRepository questionRepository;
    private final MemberServiceImpl memberService;
    private final QuestionLikeRepository questionLikeRepository;
    private final ImageService imageService;
    // 질문 작성
    public QuestionDto.Response createQuestion(QuestionDto.Post questionPostDto, MultipartFile image) throws IOException {
        Question question = mapper.questionPostDtoToQuestion(questionPostDto);
        Member member = memberService.getLoginMember();
        question.setMember(member);

        if(questionRepository.countByMember(member) >= 15) { // 질문 15개 넘으면 질문왕 뱃지 추가
            memberService.addBadge("question");
        }

        memberService.addStickerAndLevelUp(member);
        questionRepository.save(question);
        QuestionLike findQuestionLike = questionLikeRepository.findByQuestionAndMember(question, member);

        if(image != null) {
            updateImage(image, question);
        }
        return mapper.questionToQuestionResponse(question, findQuestionLike);
    }

    // 질문 수정
    public QuestionDto.Response updateQuestion(QuestionDto.Patch questionPatchDto,
                                               long questionId, MultipartFile image) throws IOException {
        questionPatchDto.setQuestionId(questionId);
        Question question = mapper.questionPatchDtoToQuestion(questionPatchDto);
        Question findQuestion = findVerifiedQuestion(question.getQuestionId()); // 검증

        if(image != null) {
            Image findImage = findQuestion.getImage();
            if(findImage != null) { // 이미지 디비에서 원래 이미지 삭제
                imageService.deleteImage(findImage.getImageId());
            }
            updateImage(image, findQuestion);
        }

        findQuestion.modify(question.getTitle(), question.getContent()); // 수정
        Member member = memberService.getLoginMember();
        QuestionLike findQuestionLike = questionLikeRepository.findByQuestionAndMember(question, member);
        return mapper.questionToQuestionResponse(findQuestion, findQuestionLike);
    }

    public void updateImage(MultipartFile image, Question question) throws IOException {
        Image savedImage = imageService.saveImage(image);
        String imagePath = imageService.getImage(savedImage.getImageId());
        Resource resource = new FileSystemResource(imagePath);
        question.modifyImageUrl(resource.getURL().toString());
        question.setImage(savedImage);
    }

    // 전체 질문 조회
    public List<QuestionDto.Response> findQuestions(String sort) {
        List<Question> questions = questionRepository.findAll(Sort.by(sort).descending());
        return mapper.questionsToQuestionResponseDtos(questions);
    }

    // 특정 질문 조회
    public QuestionDto.Response findQuestion(long questionId) {
        Question question = findVerifiedQuestion(questionId);
        question.increaseViewCount();
        Member member = memberService.getLoginMember();
        QuestionLike findQuestionLike = questionLikeRepository.findByQuestionAndMember(question, member);
        return mapper.questionToQuestionResponse(question, findQuestionLike);
    }

    // 검색 기능
    public List<QuestionDto.Response> search(String keyWord) {
        List<Question> questions = questionRepository.findByTitleContainingOrContentContaining(keyWord, keyWord);
        return mapper.questionsToQuestionResponseDtos(questions);
    }

    // 질문 삭제
    public void deleteQuestion(long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        questionRepository.delete(findQuestion);
    }

    // 유효한 질문인지 확인
    public Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(
                () -> new BusinessException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }
}