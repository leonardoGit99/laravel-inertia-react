import Form from '@/components/Posts/Form';
import { Post } from '@/types/Post';

function PostForm({ post }: { post?: Post | null }) {
  console.log(post)
    return <Form post={post} />;
}

export default PostForm;
