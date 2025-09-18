import Form from '@/components/Posts/Form';
import Layout from '@/layouts/Layout';
import { Post } from '@/types/Post';

function PostForm({ post }: { post?: Post | null }) {
  console.log(post)
    return <Form post={post} />;
}
PostForm.layout = (page: React.ReactNode) => <Layout>{page}</Layout>;
export default PostForm;
