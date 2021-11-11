import React, { Fragment } from 'react';
import styled from 'styled-components';
import ParticipantsDetail from '../sidebar/ParticipantsDetail';

type Props = {
  contentType: SidebarContent;
  displayContent: boolean;
};

export enum SidebarContentType {
  CHAT = 'CHAT',
  PARTICIPANTS = 'PARTICIPANTS',
  SETTINGS = 'SETTINGS',
  QUIZ = 'QUIZ',
  ROOMS = 'ROOMS',
}

export type SidebarContent = {
  type: SidebarContentType;
} | null;

const SidebarContentFactory: React.FC<Props> = ({
  contentType,
  displayContent,
}) => {
  const renderContent = ((content: SidebarContent) => {
    if (!content) {
      return <Fragment />;
    }
    switch (content.type) {
      case SidebarContentType.PARTICIPANTS:
        return <ParticipantsDetail />;
    }
  })(contentType);
  return (
    <S.ContentWrapper $display={displayContent}>
      {renderContent as React.ReactElement}
    </S.ContentWrapper>
  );
};
const S = {
  ContentWrapper: styled.div<{ $display: boolean }>`
    visibility: ${(props) => (props.$display ? 'visible' : 'hidden')};
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
};
export default SidebarContentFactory;
