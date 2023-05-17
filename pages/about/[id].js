import MainContainer from "../../components/MainContainer";
import {AboutTextService} from "../../services/about-text.service";


export default function ({text}) {
    // const {query} = useRouter();
    // console.log(text)

    return (
        <MainContainer title="О компании">
            <div>
                {text.description}
            </div>
        </MainContainer>

    )
}

export async function getStaticPaths() {
    const items = await AboutTextService.getAll();

    return {
        paths: items.map(item => ({
            params: {
                id: item.id.toString()
            },
        })),
        fallback: 'blocking',
    };
}

export async function getStaticProps(params) {
    const text = await AboutTextService.getById(params.id);

    return {
        props: {
            text
        },
    }
}