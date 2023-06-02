import NextjsImages from '../../pages/nextjsImages'

export default {
  title: 'Pages',
  component: NextjsImages,
  parameters: {
    nextjs: {
      image: {
        loading: 'eager',
        unoptimized: true,
      },
    }
  }
}

export const NextjsImagesPage = () => <NextjsImages />
