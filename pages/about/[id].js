import {useRouter} from "next/router";
import {aboutText} from "../text";

export default function () {
    const {query} = useRouter();
    console.log(query);

    return (
        <div>
            <div>{aboutText.filter(item => item.id === query.id)}</div>
        </div>
    )
}