import { Post } from '@/types/Post';
import { useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';

interface Props {
    post: Post | null | undefined;
}

function Form({ post }: Props) {
    const {
        data,
        setData,
        post: store,
        processing,
        errors,
        put,
    } = useForm({
        title: post?.title || '',
        description: post?.description || '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (post) {
            put(route('posts.update', post.id), {
                onSuccess: () => console.log('Post updated successfully!'),
                onError: (errors) => console.log(errors),
            });
        } else {
            store(route('posts.store'), {
                onSuccess: () => console.log('Post created successfully!'),
                onError: (errors) => console.log(errors),
            });
        }
    };

    return (
        <>
            <h1 className="mb-4 text-3xl font-bold">{post ? 'Update a post': 'Create a new post'}</h1>

            <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
                <div>
                    <label className="block font-semibold">
                        Title:
                        <input
                            type="text"
                            name="title"
                            className="rounder w-full border p-2"
                            onChange={(e) => setData('title', e.target.value)}
                            value={data.title}
                            disabled={processing}
                        />
                    </label>
                </div>
                <div>
                    <label className="block font-semibold">
                        Description:
                        <textarea
                            name="description"
                            className="w-full rounded border p-2"
                            onChange={(e) => setData('description', e.target.value)}
                            value={data.description}
                            disabled={processing}
                        />
                    </label>
                </div>

                <button type="submit" className="rounded bg-slate-600 px-4 py-2 text-white hover:bg-slate-700" disabled={processing}>
                    {post? processing? 'Updating Post...': 'Update Post': processing ? 'Creating Post...' : 'Create Post'}
                </button>
            </form>
        </>
    );
}

export default Form;
