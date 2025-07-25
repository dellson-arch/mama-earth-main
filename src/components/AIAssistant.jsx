"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "./ui/Button"
import { Card, CardContent } from "./ui/card"
import { Input } from "./ui/input"
import { Bot, Send, User, Sparkles, ShoppingCart, Heart, Star, X, Zap, Search, HelpCircle } from "lucide-react"

const AIAssistant = ({ isOpen, onClose, onNavigate, onAddToCart, onProductClick }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content:
        "Hi! I'm your AI beauty assistant. I can help you find the perfect products, answer skincare questions, and provide personalized recommendations. How can I help you today?",
      timestamp: new Date(),
      suggestions: [
        "Find products for acne",
        "Best moisturizer for dry skin",
        "Hair care routine",
        "Anti-aging products",
      ],
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const quickQuestions = [
    { icon: Search, text: "Find products for my skin type", category: "skincare" },
    { icon: Sparkles, text: "Best anti-aging routine", category: "anti-aging" },
    { icon: HelpCircle, text: "How to treat acne naturally", category: "acne" },
    { icon: Heart, text: "Products for sensitive skin", category: "sensitive" },
  ]

  const productRecommendations = [
    {
      id: 1,
      name: "Vitamin C Face Wash",
      price: 299,
      originalPrice: 399,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=200&fit=crop",
      reason: "Perfect for brightening and daily cleansing",
    },
    {
      id: 4,
      name: "Tea Tree Face Serum",
      price: 599,
      originalPrice: 799,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop",
      reason: "Ideal for acne-prone skin",
    },
    {
      id: 5,
      name: "Aloe Vera Gel",
      price: 199,
      originalPrice: 299,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=200&h=200&fit=crop",
      reason: "Soothes and hydrates all skin types",
    },
  ]

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = async (message = inputMessage) => {
    if (!message.trim()) return

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: message,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateBotResponse(message)
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase()
    const response = {
      id: Date.now() + 1,
      type: "bot",
      content: "",
      timestamp: new Date(),
      products: [],
      suggestions: [],
      actions: [],
    }

    if (lowerMessage.includes("acne") || lowerMessage.includes("pimple")) {
      response.content =
        "For acne-prone skin, I recommend products with tea tree oil, salicylic acid, and niacinamide. Here are some great options:"
      response.products = [
        {
          id: 4,
          name: "Tea Tree Face Serum",
          price: 599,
          originalPrice: 799,
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop",
          reason: "Contains tea tree oil and niacinamide for acne control",
        },
      ]
      response.suggestions = ["How to use tea tree serum", "Best face wash for acne", "Natural acne remedies"]
      response.actions = [
        { text: "Try AI Analyzer", action: () => onNavigate("analyzer") },
        { text: "View All Products", action: () => onNavigate("products") },
      ]
    } else if (lowerMessage.includes("dry skin") || lowerMessage.includes("moisturizer")) {
      response.content =
        "For dry skin, you need products with hyaluronic acid, ceramides, and natural oils. Here are my top picks:"
      response.products = [
        {
          id: 5,
          name: "Aloe Vera Gel",
          price: 199,
          originalPrice: 299,
          rating: 4.4,
          image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=200&h=200&fit=crop",
          reason: "Deeply hydrates and soothes dry skin",
        },
      ]
      response.suggestions = ["Best time to apply moisturizer", "DIY hydrating face masks", "Winter skincare routine"]
    } else if (lowerMessage.includes("hair") || lowerMessage.includes("hair care")) {
      response.content =
        "For healthy hair, focus on gentle cleansing, deep conditioning, and natural oils. Here are some excellent products:"
      response.products = [
        {
          id: 2,
          name: "Onion Hair Oil",
          price: 399,
          originalPrice: 499,
          rating: 4.6,
          image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=200&h=200&fit=crop",
          reason: "Promotes hair growth and reduces hair fall",
        },
      ]
      response.suggestions = ["How often to oil hair", "Best hair masks", "Natural hair growth tips"]
    } else if (lowerMessage.includes("sensitive skin")) {
      response.content =
        "Sensitive skin needs gentle, fragrance-free products with soothing ingredients. Here's what I recommend:"
      response.products = [
        {
          id: 5,
          name: "Aloe Vera Gel",
          price: 199,
          originalPrice: 299,
          rating: 4.4,
          image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=200&h=200&fit=crop",
          reason: "Gentle and soothing for sensitive skin",
        },
      ]
      response.suggestions = ["Patch testing new products", "Ingredients to avoid", "Gentle skincare routine"]
    } else if (lowerMessage.includes("routine") || lowerMessage.includes("skincare routine")) {
      response.content =
        "A good skincare routine should include cleansing, treating, moisturizing, and protecting. Here's a basic routine with recommended products:"
      response.products = productRecommendations
      response.suggestions = ["Morning vs evening routine", "How to layer products", "Beginner skincare tips"]
      response.actions = [
        { text: "Try AI Analyzer", action: () => onNavigate("analyzer") },
        { text: "Join Community", action: () => onNavigate("community") },
      ]
    } else {
      response.content =
        "I'd be happy to help you with that! Could you tell me more about your specific skin concerns or what type of products you're looking for? I can provide personalized recommendations based on your needs."
      response.suggestions = [
        "Tell me about your skin type",
        "Show me bestselling products",
        "I need help with acne",
        "Recommend a skincare routine",
      ]
      response.actions = [
        { text: "Try AI Analyzer", action: () => onNavigate("analyzer") },
        { text: "View Products", action: () => onNavigate("products") },
      ]
    }

    return response
  }

  const handleQuickQuestion = (question) => {
    handleSendMessage(question)
  }

  const MessageBubble = ({ message }) => (
    <div className={`flex ${message.type === "user" ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`flex items-start space-x-3 max-w-[80%] ${message.type === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
      >
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            message.type === "user" ? "bg-green-500" : "bg-blue-500"
          }`}
        >
          {message.type === "user" ? <User className="h-4 w-4 text-white" /> : <Bot className="h-4 w-4 text-white" />}
        </div>
        <div
          className={`rounded-2xl px-4 py-3 ${
            message.type === "user" ? "bg-green-500 text-white" : "bg-gray-800 text-gray-100 border border-gray-700"
          }`}
        >
          <p className="text-sm leading-relaxed">{message.content}</p>

          {/* Product Recommendations */}
          {message.products && message.products.length > 0 && (
            <div className="mt-4 space-y-3">
              {message.products.map((product) => (
                <Card key={product.id} className="bg-gray-900/50 border-gray-600">
                  <CardContent className="p-3">
                    <div className="flex items-center space-x-3">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-16 h-16 rounded-lg object-cover cursor-pointer"
                        onClick={() => onProductClick && onProductClick(product)}
                      />
                      <div className="flex-1 min-w-0">
                        <h4
                          className="font-semibold text-white text-sm truncate cursor-pointer"
                          onClick={() => onProductClick && onProductClick(product)}
                        >
                          {product.name}
                        </h4>
                        <div className="flex items-center space-x-1 mt-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-300">{product.rating}</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-sm font-bold text-green-400">₹{product.price}</span>
                          <span className="text-xs text-gray-500 line-through">₹{product.originalPrice}</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">{product.reason}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Button
                        onClick={() => onAddToCart && onAddToCart(product)}
                        size="sm"
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white text-xs"
                      >
                        <ShoppingCart className="h-3 w-3 mr-1" />
                        Add to Cart
                      </Button>
                      <Button
                        onClick={() => onProductClick && onProductClick(product)}
                        size="sm"
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:text-white hover:border-gray-500"
                      >
                        View
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          {message.actions && message.actions.length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-xs text-gray-400">Quick actions:</p>
              <div className="flex flex-wrap gap-2">
                {message.actions.map((action, index) => (
                  <Button
                    key={index}
                    onClick={action.action}
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 text-white text-xs"
                  >
                    <Zap className="h-3 w-3 mr-1" />
                    {action.text}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Suggestions */}
          {message.suggestions && message.suggestions.length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-xs text-gray-400">Suggested questions:</p>
              <div className="flex flex-wrap gap-2">
                {message.suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(suggestion)}
                    className="bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-600/50 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-between items-center mt-2">
            <span className="text-xs text-gray-500">
              {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </span>
          </div>
        </div>
      </div>
    </div>
  )

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-700 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">AI Beauty Assistant</h2>
              <p className="text-sm text-gray-400">Your personal skincare & beauty expert</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => onNavigate("analyzer")}
              variant="outline"
              size="sm"
              className="border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-400 bg-transparent"
            >
              <Zap className="h-4 w-4 mr-2" />
              AI Analyzer
            </Button>
            <button onClick={onClose} className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
              <X className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Quick Questions */}
        <div className="p-4 border-b border-gray-700">
          <p className="text-sm text-gray-400 mb-3">Quick questions:</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuickQuestion(question.text)}
                className="flex items-center space-x-2 p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg border border-gray-700/50 hover:border-green-500/50 transition-all text-left"
              >
                <question.icon className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-xs text-gray-300 truncate">{question.text}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="flex items-start space-x-3 max-w-[80%]">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-2xl px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-6 border-t border-gray-700">
          <div className="flex space-x-3">
            <Input
              type="text"
              placeholder="Ask me anything about skincare, hair care, or beauty..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-500"
            />
            <Button
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim() || isTyping}
              className="bg-green-500 hover:bg-green-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            AI Assistant can make mistakes. Please verify important information.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AIAssistant
