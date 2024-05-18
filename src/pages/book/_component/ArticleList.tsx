import { ArticleCard } from '@components';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

export interface ArticleProps {
  chapterId: string;
  chapterTitle: string;
  content: string;
  chapterImage: string;
  chapterRuntime: string;
}
const articleInitialData: ArticleProps[] = [
  {
    chapterId: '1',
    chapterTitle: '무인도의 부자 노인',
    content:
      '바다 한가운데에서 배가 침몰했다. 운이 좋아 살아남은 사람들은 한 무인도의 해변에서 깨어났다.이미 죽어 시신이 된 사람들을 제외하면, 살아 있는 사람들은 10여명. 어떤 사람은 멍하니 주저않았다. 그러나 나는 살아 남앗다.',
    chapterImage: 'public/assets/images/book.jpeg',
    chapterRuntime: '1분',
  },
  {
    chapterId: '1',
    chapterTitle: '무인도의 부자 노인',
    content:
      '바다 한가운데에서 배가 침몰했다. 운이 좋아 살아남은 사람들은 한 무인도의 해변에서 깨어났다.이미 죽어 시신이 된 사람들을 제외하면, 살아 있는 사람들은 10여명. 어떤 사람은 멍하니 주저않았다. 그러나 나는 살아 남앗다.',
    chapterImage: 'public/assets/images/book.jpeg',
    chapterRuntime: '1분',
  },
  {
    chapterId: '1',
    chapterTitle: '무인도의 부자 노인',
    content:
      '바다 한가운데에서 배가 침몰했다. 운이 좋아 살아남은 사람들은 한 무인도의 해변에서 깨어났다.이미 죽어 시신이 된 사람들을 제외하면, 살아 있는 사람들은 10여명. 어떤 사람은 멍하니 주저않았다. 그러나 나는 살아 남앗다.',
    chapterImage: 'public/assets/images/book.jpeg',
    chapterRuntime: '1분',
  },
];

const ArticleList = () => {
  const [articles, setArticles] = useState(articleInitialData);
  // TODO: API 연동 후 데이터 받아오기

  useEffect(() => {
    setArticles(articleInitialData);
  }, []);

  return (
    <Container>
      <Wrapper>
        {articles.map((article, i) => (
          <React.Fragment key={`article-fragment-${i}`}>
            <ArticleCard
              key={`article-${i}`}
              chapterId={article.chapterId}
              chapterTitle={article.chapterTitle}
              content={article.content}
              chapterImage={article.chapterImage}
              chapterRuntime={article.chapterRuntime}
            />
            <Divider />
          </React.Fragment>
        ))}
      </Wrapper>
    </Container>
  );
};

export default ArticleList;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Divider = styled.div`
  width: 100%;
  margin: 2.2rem 0;

  &:last-child {
    display: none;
  }
  border: 0.8px solid ${({ theme }) => theme.color.gray03};
`;