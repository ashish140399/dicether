import * as React from "react";
import {Form as BootstrapForm} from "reactstrap";

import {BaseType} from "./BaseType";

import "./Form.scss";

export interface Props extends BaseType {
    inline?: boolean;
    children: React.ReactNode;

    onSubmit(e: React.FormEvent<HTMLFormElement>): void;
}

const Form = ({inline = false, children, ...rest}: Props) => (
    <BootstrapForm inline={inline} children={children} {...rest} />
);

export default Form;
