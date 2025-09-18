<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::with('user')->latest()->get();
        return Inertia::render('Posts/Index', [
            'posts' => $posts
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Posts/PostForm',[
        'post' => null, // We pass nothing because we're creating
    ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validated body
        $validatedBody = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:1000'
        ]);

        // Associate to an authenticated user
        //$body['user_id'] = $request->user()->id;
        $validatedBody['user_id'] = 2;
        Post::create($validatedBody);

        return redirect()->route('posts.index')->with('success', 'Post created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        return Inertia::render('Posts/PostForm',[
            'post' => $post // We pass data from db
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        $validatedBody = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:1000'
        ]);

        $post->update($validatedBody);

        return redirect()->route('posts.index')->with('success', 'Post updated');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        if ($post->delete()) {
            return redirect()->route('posts.index')
                ->with('success', 'Post deleted successfully');
        }

        return redirect()->route('posts.index')
            ->with('error', 'Failed to delete the post');
    }
}
