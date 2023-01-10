import classNames from 'classnames';
import { ReactNode } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {
  className?: string;
  label?: string;
  buttonType?: 'primary' | 'secondary';
  children?: ReactNode;
}

const StyledButton = styled.div`
  color: #272727;
  border: 1px solid #272727;
  border-radius: 4px;
  padding: 12px 16px;
`;

export function Button({ className, children, label, ...r }: ButtonProps) {
  const _label = children || label;
  const classnames = classNames('button', className);
  return (
    <StyledButton className={classnames} {...r}>
      <span>{_label}</span>
    </StyledButton>
  );
}

export default Button;
