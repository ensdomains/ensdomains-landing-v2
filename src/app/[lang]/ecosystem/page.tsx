/* eslint-disable unicorn/prevent-abbreviations */

import Footer from '../../../components/Footer/Footer';
import { LinkList } from '../../../components/LinkList/LinkList';
import { Navbar } from '../../../components/Navbar/Navbar';
import { Language } from '../../../i18n/settings';
import { useTranslation } from '../../../i18n/useTranslation';

export default async function Home({
    params,
}: {
    params: { lang: Language };
    searchParams?: any;
}) {
    const { t } = await useTranslation(params.lang, 'translation');

    return (
        <div className="page">
            <Navbar t={t} lang={params.lang} />

            <div>Ready for integration?</div>

            <LinkList
                links={[
                    {
                        title: 'Robust Web3 Foundation',
                        href: '',
                        description:
                            'Gain access to a built-in audience, establishing your brand as a key player in the new internet era.',
                    },
                    {
                        title: 'Unparalleled Trust',
                        href: '',
                        description:
                            // eslint-disable-next-line quotes
                            "Trust isn't a buzzword, it's our foundation. As a non-profit, DAO-governed protocol, we're committed to security and integrity.",
                    },
                    {
                        title: 'Need more resources?',
                        href: '',
                        description:
                            'ENS is more powerful than you think. See below for more resources on how to integrate ENS into your organization.',
                    },
                ]}
            />

            <div>exploring a partnership?</div>

            <div>featured partners</div>

            <Footer />
        </div>
    );
}

export { generateStaticParams } from '../../../utils/getStatic';
