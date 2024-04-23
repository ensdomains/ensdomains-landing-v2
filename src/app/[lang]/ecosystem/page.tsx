import { Language } from '../../../i18n/settings';
import Page from '../../ecosystem/page';

export default async function LocaleEcosystem({
    params,
}: {
    params: { lang: Language };
    searchParams: any;
}) {
    return <Page params={params} />;
}

export { generateStaticParams } from '../../../utils/getStatic';
