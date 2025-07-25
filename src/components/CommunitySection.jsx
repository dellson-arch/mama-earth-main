"use client"

import { useState } from "react"
import { Button } from "./ui/Button"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/Badge"
import { Input } from "./ui/input"
import { Heart, MessageCircle, Share2, Search, Star, User, Award, Users, X, Send, ThumbsUp, Eye } from "lucide-react"

const CommunitySection = () => {
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPost, setSelectedPost] = useState(null)
  const [newComment, setNewComment] = useState("")

  const filters = [
    { id: "all", label: "All Posts", count: 156 },
    { id: "reviews", label: "Reviews", count: 89 },
    { id: "tips", label: "Tips & Tricks", count: 34 },
    { id: "questions", label: "Questions", count: 23 },
    { id: "routines", label: "Routines", count: 10 },
  ]

  const communityPosts = [
    {
      id: 1,
      type: "review",
      author: {
        name: "Priya Sharma",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
        verified: true,
        level: "Beauty Expert",
      },
      title: "Amazing results with Vitamin C Face Wash!",
      content:
        "I've been using the MamaEarth Vitamin C Face Wash for 3 weeks now and the results are incredible! My skin looks brighter and feels so much smoother. The turmeric really helps with the glow.",
      images: ["https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop"],
      product: {
        name: "Vitamin C Face Wash",
        rating: 5,
      },
      stats: {
        likes: 234,
        comments: 45,
        shares: 12,
        views: 1200,
      },
      tags: ["vitamin-c", "face-wash", "brightening", "natural"],
      timestamp: "2 hours ago",
      liked: false,
    },
    {
      id: 2,
      type: "tip",
      author: {
        name: "Ananya Gupta",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
        verified: false,
        level: "Skincare Enthusiast",
      },
      title: "My 5-step natural skincare routine",
      content:
        "Here's my daily routine that has transformed my skin: 1. Gentle cleansing with rice face wash 2. Tea tree serum for acne spots 3. Aloe vera gel for hydration 4. Sunscreen (most important!) 5. Weekly ubtan face mask",
      images: [],
      stats: {
        likes: 189,
        comments: 67,
        shares: 23,
        views: 890,
      },
      tags: ["routine", "skincare", "natural", "tips"],
      timestamp: "5 hours ago",
      liked: true,
    },
    {
      id: 3,
      type: "question",
      author: {
        name: "Kavya Menon",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face",
        verified: false,
        level: "Beginner",
      },
      title: "Best products for sensitive skin?",
      content:
        "I have very sensitive skin and I'm looking for gentle products that won't cause irritation. Has anyone with sensitive skin tried MamaEarth products? Which ones would you recommend?",
      images: [],
      stats: {
        likes: 45,
        comments: 28,
        shares: 5,
        views: 456,
      },
      tags: ["sensitive-skin", "recommendations", "help"],
      timestamp: "1 day ago",
      liked: false,
    },
    {
      id: 4,
      type: "routine",
      author: {
        name: "Riya Patel",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&h=60&fit=crop&crop=face",
        verified: true,
        level: "Dermatologist",
      },
      title: "Professional advice: Building your first skincare routine",
      content:
        "As a dermatologist, I often get asked about starting a skincare routine. Here are my top recommendations for beginners using natural products...",
      images: ["https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"],
      stats: {
        likes: 567,
        comments: 123,
        shares: 89,
        views: 2340,
      },
      tags: ["professional", "routine", "beginner", "dermatologist"],
      timestamp: "2 days ago",
      liked: true,
    },
  ]

  const postComments = {
    1: [
      {
        id: 1,
        author: "Sneha K",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
        content: "I've been thinking about trying this! Thanks for the honest review 😊",
        timestamp: "1 hour ago",
        likes: 12,
      },
      {
        id: 2,
        author: "Meera S",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
        content: "How long did it take to see results?",
        timestamp: "45 minutes ago",
        likes: 5,
      },
    ],
  }

  const filteredPosts = communityPosts.filter((post) => {
    const matchesFilter = selectedFilter === "all" || post.type === selectedFilter
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const handleLike = (postId) => {
    // Handle like functionality
    console.log("Liked post:", postId)
  }

  const handleComment = (postId) => {
    setSelectedPost(communityPosts.find((post) => post.id === postId))
  }

  const handleShare = (postId) => {
    // Handle share functionality
    console.log("Shared post:", postId)
  }

  const submitComment = () => {
    if (newComment.trim()) {
      console.log("New comment:", newComment)
      setNewComment("")
    }
  }

  const PostCard = ({ post }) => (
    <Card className="glass-effect border-gray-700 hover:border-gray-600 transition-all duration-300">
      <CardContent className="p-6">
        {/* Author Info */}
        <div className="flex items-center space-x-3 mb-4">
          <img
            src={post.author.avatar || "/placeholder.svg"}
            alt={post.author.name}
            className="w-12 h-12 rounded-full border-2 border-green-500/30"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h4 className="font-semibold text-white">{post.author.name}</h4>
              {post.author.verified && (
                <Badge className="bg-blue-500/20 text-blue-400 text-xs">
                  <Award className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              )}
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>{post.author.level}</span>
              <span>•</span>
              <span>{post.timestamp}</span>
            </div>
          </div>
          <Badge
            className={`text-xs ${
              post.type === "review"
                ? "bg-green-500/20 text-green-400"
                : post.type === "tip"
                  ? "bg-blue-500/20 text-blue-400"
                  : post.type === "question"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-purple-500/20 text-purple-400"
            }`}
          >
            {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
          </Badge>
        </div>

        {/* Post Content */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white mb-2">{post.title}</h3>
          <p className="text-gray-300 leading-relaxed">{post.content}</p>
        </div>

        {/* Product Rating (for reviews) */}
        {post.product && (
          <div className="mb-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-white font-medium">{post.product.name}</span>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < post.product.rating ? "text-yellow-400 fill-current" : "text-gray-600"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Images */}
        {post.images.length > 0 && (
          <div className="mb-4">
            <div className="grid grid-cols-2 gap-2">
              {post.images.map((image, index) => (
                <img
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`Post image ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} className="bg-gray-700/50 text-gray-300 text-xs">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Stats and Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{post.stats.views}</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleLike(post.id)}
              className={`text-gray-400 hover:text-red-400 ${post.liked ? "text-red-400" : ""}`}
            >
              <Heart className={`h-4 w-4 mr-1 ${post.liked ? "fill-current" : ""}`} />
              {post.stats.likes}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleComment(post.id)}
              className="text-gray-400 hover:text-blue-400"
            >
              <MessageCircle className="h-4 w-4 mr-1" />
              {post.stats.comments}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleShare(post.id)}
              className="text-gray-400 hover:text-green-400"
            >
              <Share2 className="h-4 w-4 mr-1" />
              {post.stats.shares}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="glass-effect text-green-400 border-green-500/30 px-6 py-3 text-sm font-medium mb-6">
            <Users className="h-4 w-4 mr-2" />
            MamaEarth Community
          </Badge>
          <h1 className="text-4xl font-black text-white mb-4">Share Your Beauty Journey</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect with fellow beauty enthusiasts, share reviews, tips, and get advice from our community
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search posts, tips, reviews..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-500"
                />
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                className={`${
                  selectedFilter === filter.id
                    ? "bg-green-500 text-white"
                    : "border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-400 bg-transparent"
                }`}
              >
                {filter.label}
                <Badge className="ml-2 bg-gray-700 text-gray-300 text-xs">{filter.count}</Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Post Detail Modal */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <h2 className="text-xl font-bold text-white">Post Details</h2>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5 text-gray-400" />
                </button>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <PostCard post={selectedPost} />

                {/* Comments Section */}
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <h3 className="text-lg font-bold text-white mb-4">Comments</h3>

                  {/* Add Comment */}
                  <div className="mb-6">
                    <div className="flex space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <Input
                          type="text"
                          placeholder="Write a comment..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 mb-2"
                        />
                        <Button
                          onClick={submitComment}
                          size="sm"
                          className="bg-green-500 hover:bg-green-600 text-white"
                        >
                          <Send className="h-3 w-3 mr-1" />
                          Comment
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Comments List */}
                  <div className="space-y-4">
                    {(postComments[selectedPost.id] || []).map((comment) => (
                      <div key={comment.id} className="flex space-x-3">
                        <img
                          src={comment.avatar || "/placeholder.svg"}
                          alt={comment.author}
                          className="w-8 h-8 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="bg-gray-800/50 rounded-lg p-3">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-medium text-white text-sm">{comment.author}</span>
                              <span className="text-xs text-gray-500">{comment.timestamp}</span>
                            </div>
                            <p className="text-gray-300 text-sm">{comment.content}</p>
                          </div>
                          <div className="flex items-center space-x-4 mt-2">
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400 text-xs p-0">
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              {comment.likes}
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CommunitySection
