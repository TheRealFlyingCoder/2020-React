import { MetaConfig } from '~/configuration/meta';

import bannerImage from '~/assets/exampleBanner.jpg';

export default {
    ...MetaConfig,
    title: 'Home | React SPA',
    description: 'The Flying Coder\'s SPA Landing page',
    image: bannerImage,
    custom: [
        {
            tag: '',
            props: {},
            content: '',
        }
    ]
}