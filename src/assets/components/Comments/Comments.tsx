import type { FC, ReactNode } from "react";
import classes from "./Comments.module.sass";

export interface CommentsProps {
	children: ReactNode;
}

export interface CommentsComponent extends FC<CommentsProps> {}

export const Comments: CommentsComponent = ({ children }) => {
	return <div className={classes.wrapper}>{children}</div>;
};
