import React, { FC } from 'react';
import IllustrationEditorDesktop from '../../../../assets/images/illustration-editor-desktop.svg';
import IllustrationEditorMobile from '../../../../assets/images/illustration-editor-mobile.svg';

export const Introduction: FC = () => {
    return (
        <section>
            <h2>Designed for the future</h2>
            <div>
                <h3>Introducing an extensible editor</h3>
                <p>
                    Blogr features an exceedingly intuitive interface wich lets you focus on one thing: creating
                    content. The editor supports management of multiple blogs an allows easy manipulation of embeds such
                    as images, videos and Markdown. Extensibility with plugins and themes provide easy ways to add
                    functionality or change the looks of a blog.
                </p>
                <h3>Robust content management</h3>
                <p>
                    Flexible content management enables users to easily move through posts. Increase the usability of
                    your blog by adding customized categories, sections, format or flow. With this functionality,
                    you&apos;re in full control.
                </p>
            </div>
            <div>
                <img src={IllustrationEditorDesktop} alt="Illustration editor desktop"></img>
                <img src={IllustrationEditorMobile} alt="Illustration editor mobile"></img>
            </div>
        </section>
    );
};
