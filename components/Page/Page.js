import React, { Component } from 'react';
import "./Page.css";
import PageContent from "./_PageContent";
import classnames from "classnames";

class Page extends Component {
    static Content = PageContent;

    render() {
        const {
            children,
            className,
            footer,
            ...props
        } = this.props;

        return (
            <main {...props}
                className={classnames(
                    "page",
                    "fd-page",
                    className
                )}>
                {children}
            </main>
        );
    }
}

export default Page;