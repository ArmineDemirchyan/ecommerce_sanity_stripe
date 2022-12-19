import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "next-sanity-image";

const client = SanityClient({
    projectId:'z53dmpc9',
    dataset:'production',
    apiVersion:'2022-18-12',
    useCdn:true,
    token:''
})