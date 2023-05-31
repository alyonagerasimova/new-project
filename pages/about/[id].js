import MainContainer from "../../components/MainContainer";
import data from "../../db.json";
import {useRouter} from "next/router";

export default function () {
    const {query} = useRouter();

    return (
        // <MainContainer title="О компании">
            <div>
                {/*{data.aboutText[query.id - 1].description}*/}
            </div>
        // </MainContainer>

    )
}
//
// export async function getStaticPaths() {
//     // const items = await AboutTextService.getAll();
//     const items = data.aboutText;
//
//     return {
//         paths: items.map(item => ({
//             params: {
//                 id: item.id.toString()
//             },
//         })),
//         fallback: 'blocking',
//     };
// }
//
// export async function getStaticProps(params) {
//     // const text = await AboutTextService.getById(params.id);
//     const text = data.aboutText.filter(it => it.id === params.id);
//
//     return {
//         props: {
//             text
//         },
//     }
// }