import Layout from '@/layouts/Layout';
import { Post } from '@/types/Post';
import { router } from '@inertiajs/react';
import { route } from 'ziggy-js';

interface Props {
    posts: Post[];
    flash?: {
        success?: string;
        error?: string;
    };
}

function Index({ posts, flash }: Props) {
    console.log(posts);
    if (!Array.isArray(posts) || posts.length === 0) return <>No posts yet...</>;

    const handleDelete = (postId: number) => {
        console.log(postId);
        if (confirm('Are you sure you want to delete this post?')) {
            router.delete(route('posts.destroy', postId), {
                onSuccess: () => {
                    console.log('Post deleted successfully!');
                },
                onError: (errors) => console.error(errors),
            });
        }
    };

    const handleEdit = (postId: number) => {
      console.log(postId);
      router.visit(route('posts.edit', postId));
    }

    return (
        <>
            {/* Flash message */}
            {flash?.success && <div className="mb-4 rounded bg-green-100 px-4 py-2 text-green-800">{flash.success}</div>}
            {flash?.error && <div className="mb-4 rounded bg-red-100 px-4 py-2 text-red-800">{flash.error}</div>}

            {/* Tabla de posts */}
            {posts.length === 0 ? (
                <>No posts yet...</>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th className="border-b px-4 py-2 text-left">ID</th>
                            <th className="border-b px-4 py-2 text-left">Title</th>
                            <th className="border-b px-4 py-2 text-left">Description</th>
                            <th className="border-b px-4 py-2 text-left">User</th>
                            <th className="border-b px-4 py-2 text-left">Created At</th>
                            <th className="border-b px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr className="hover:bg-gray-50" key={post.id}>
                                <td className="border-b px-4 py-2">{post.id}</td>
                                <td className="border-b px-4 py-2">{post.title}</td>
                                <td className="border-b px-4 py-2">{post.description}</td>
                                <td className="border-b px-4 py-2">{post.user.name}</td>
                                <td className="border-b px-4 py-2">{post.created_at}</td>
                                <td className="flex w-full flex-col gap-2 border-b px-4 py-2 text-center">
                                    {/* Delete */}
                                    <button
                                        className="w-full rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                                        onClick={() => handleDelete(post.id)}
                                    >
                                        Delete
                                    </button>
                                    {/* Edit */}
                                    <button className="w-full rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-500"
                                    onClick={()=>handleEdit(post.id)}
                                    >Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}

Index.layout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Index;
