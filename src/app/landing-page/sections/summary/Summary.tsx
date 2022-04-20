import React, { FC } from 'react';

import IllustrationPhones from '../../../../assets/images/illustration-phones.svg';

export const Summary: FC = () => {
    return (
        <section>
            <img src={IllustrationPhones} alt="Phones illustration" />
            <div>
                <h2>State of the Art Infrastructure</h2>
                <p>
                    With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast
                    connectivity. This ensures your site will load instantly, no matter where your readers are, keeping
                    your site competitive.
                </p>
            </div>
        </section>
    );
};
