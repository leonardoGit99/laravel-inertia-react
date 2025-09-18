import { Link } from '@inertiajs/react';
import React from 'react';
import { route } from 'ziggy-js';

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-gray-100 text-gray-900">
            <nav className="flex w-full justify-between bg-sky-600 p-4 px-7 text-white">
                <Link href={route('posts.index')}>
                <h1 className="text-xl font-bold hover:cursor-pointer">My Blog</h1>
                </Link>
                <Link href="/posts/create" className="font-semibold hover:cursor-pointer hover:underline">
                    Create post
                </Link>
            </nav>

            <div className="min-h-screen max-w-5xl mx-auto">{children}</div>
        </div>
    );
}

export default Layout;
