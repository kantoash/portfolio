import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const projectId = '54o3nk6f';
export const dataset = 'production';
export const apiVersion = "2022-11-16";

export const config = {
    projectId,
    dataset,
    apiVersion,
    useCdn: false
}

export const client = createClient(config);
export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);