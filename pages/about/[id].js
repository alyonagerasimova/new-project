import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer";
import {useState} from "react";

export default function () {
    const {query} = useRouter();
    console.log(query)

    return (
        <MainContainer title="О компании">
            <div>
                About {query.id}
            </div>
        </MainContainer>

    )
}