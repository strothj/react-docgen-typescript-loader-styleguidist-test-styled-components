import React, { StatelessComponent } from "react";
import styled from "../../themed-components";

export interface ButtonProps {
  /**
   * Text of the button
   * @default "test"
   */
  text?: string;
  /**
   * Text of the button
   * @default "test"
   */
  onClick?(): void;
  icon?: string;
  tooltipConfig?: any;
  small?: boolean;
  className?: any;
  $log?: any;
}

/**
 * This is a button
 */
const BaseButton: StatelessComponent<ButtonProps> = ({
  onClick,
  icon,
  text,
  className,
  $log
}) => {
  if ($log) {
    $log.info("LOG SERVICE FROM REACT");
  }
  return (
    <button className={className} onClick={onClick}>
      {icon && <i />}
      <span>{text}</span>
    </button>
  );
};

export const Button = styled<ButtonProps>(BaseButton)`
  cursor: pointer;
  display: inline-block;
  height: ${props => props.theme.button.height}px;
  line-height: ${props => props.theme.button.lineHeight}px;
  padding: 0 20px;
  text-align: center;
  width: auto;
  min-width: 145px;
  background: transparent;
  font-size: ${props => props.theme.button.fontSize};
  font-weight: 600;
  -webkit-appearance: none;
  position: relative;
  border-radius: ${props => props.theme.button.borderRadius};
  &:focus,
  &:active,
  &:active:focus {
    outline: none;
    text-decoration: none;
    border: none;
    box-shadow: none;
    outline-style: none;
  }
  &:disabled {
    border: 1px solid $btn-disabled-border-color;
    background: $btn-disabled-bg-color;
    color: $btn-disabled-txt-color;
    opacity: 1;
    pointer-events: none;
  }
`;

export const PrimaryButton = styled<ButtonProps>(Button)`
  background: ${props => props.theme.button.primary.background};
  color: ${props => props.theme.button.primary.color};
  &:hover {
    background: ${props => props.theme.button.primary.hover.background};
  }
`;

export default PrimaryButton;
