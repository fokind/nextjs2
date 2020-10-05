import React, { Component } from 'react';
import "./Page.css";
import classnames from "classnames";

class PageContent extends Component {
    render() {
        const {
            children,
            className,
            ...props
        } = this.props;

        return (
            <div {...props}
                className={classnames(
                    "content",
                    "fd-page__content",
                    className
                )}>
                <section>
                    <div>
                        <div>{children}</div>
                    </div>
                </section>
            </div>
        );
    }
}

export default PageContent;