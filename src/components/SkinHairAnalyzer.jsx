"use client"

import { useState, useRef } from "react"
import { Button } from "./ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/Badge"
import {
  Camera,
  Upload,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Star,
  Sparkles,
  Award,
  Heart,
  ShoppingCart,
  X,
} from "lucide-react"

const SkinHairAnalyzer = ({ onAddToCart, onAddToWishlist, onProductClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [uploadedImage, setUploadedImage] = useState(null)
  const [analysisData, setAnalysisData] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [answers, setAnswers] = useState({})
  const fileInputRef = useRef(null)

  const steps = [
    { id: 1, title: "Upload Photo", description: "Take or upload a clear photo" },
    { id: 2, title: "Answer Questions", description: "Tell us about your concerns" },
    { id: 3, title: "AI Analysis", description: "Our AI analyzes your skin/hair" },
    { id: 4, title: "Get Results", description: "Receive personalized recommendations" },
  ]

  const questions = [
    {
      id: "skinType",
      question: "What is your skin type?",
      options: ["Oily", "Dry", "Combination", "Sensitive", "Normal"],
    },
    {
      id: "concerns",
      question: "What are your main concerns?",
      options: ["Acne", "Dark Spots", "Wrinkles", "Dullness", "Pores", "Dryness"],
      multiple: true,
    },
    {
      id: "routine",
      question: "How often do you follow a skincare routine?",
      options: ["Daily", "2-3 times a week", "Weekly", "Rarely", "Never"],
    },
    {
      id: "products",
      question: "What products do you currently use?",
      options: ["Face Wash", "Moisturizer", "Serum", "Sunscreen", "Face Mask", "None"],
      multiple: true,
    },
  ]

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCameraCapture = () => {
    if (fileInputRef.current) {
      fileInputRef.current.setAttribute("capture", "environment")
      fileInputRef.current.click()
    }
  }

  const handleAnswerChange = (questionId, answer, isMultiple = false) => {
    if (isMultiple) {
      const currentAnswers = answers[questionId] || []
      const newAnswers = currentAnswers.includes(answer)
        ? currentAnswers.filter((a) => a !== answer)
        : [...currentAnswers, answer]
      setAnswers({ ...answers, [questionId]: newAnswers })
    } else {
      setAnswers({ ...answers, [questionId]: answer })
    }
  }

  const startAnalysis = () => {
    setIsAnalyzing(true)
    setCurrentStep(3)

    // Simulate AI analysis
    setTimeout(() => {
      const mockAnalysis = {
        skinScore: 78,
        skinType: answers.skinType || "Combination",
        concerns: answers.concerns || ["Acne", "Dark Spots"],
        recommendations: [
          {
            id: 1,
            name: "Vitamin C Face Wash",
            price: 299,
            originalPrice: 399,
            rating: 4.5,
            image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
            reason: "Perfect for brightening and removing impurities",
          },
          {
            id: 4,
            name: "Tea Tree Face Serum",
            price: 599,
            originalPrice: 799,
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
            reason: "Ideal for acne treatment and oil control",
          },
          {
            id: 5,
            name: "Aloe Vera Gel",
            price: 199,
            originalPrice: 299,
            rating: 4.4,
            image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop",
            reason: "Soothes and hydrates sensitive skin",
          },
        ],
        tips: [
          "Use sunscreen daily to prevent further damage",
          "Maintain a consistent skincare routine",
          "Stay hydrated and eat antioxidant-rich foods",
          "Avoid touching your face frequently",
        ],
      }

      setAnalysisData(mockAnalysis)
      setIsAnalyzing(false)
      setCurrentStep(4)
    }, 3000)
  }

  const nextStep = () => {
    if (currentStep < 4) {
      if (currentStep === 2) {
        startAnalysis()
      } else {
        setCurrentStep(currentStep + 1)
      }
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const resetAnalyzer = () => {
    setCurrentStep(1)
    setUploadedImage(null)
    setAnalysisData(null)
    setAnswers({})
    setIsAnalyzing(false)
  }

  const openAnalyzer = () => {
    setIsOpen(true)
    resetAnalyzer()
  }

  const closeAnalyzer = () => {
    setIsOpen(false)
    resetAnalyzer()
  }

  if (!isOpen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <Badge className="glass-effect text-green-400 border-green-500/30 px-6 py-3 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              AI-Powered Analysis
            </Badge>
            <h1 className="text-5xl font-black text-white mb-6">
              Discover Your Perfect
              <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent block">
                Skincare Routine
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get personalized product recommendations based on AI analysis of your skin and hair
            </p>
            <Button
              onClick={openAnalyzer}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Start AI Analysis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div>
            <h2 className="text-2xl font-bold text-white">AI Skin & Hair Analyzer</h2>
            <p className="text-gray-400">Get personalized recommendations powered by AI</p>
          </div>
          <button onClick={closeAnalyzer} className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
            <X className="h-6 w-6 text-gray-400" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    currentStep >= step.id
                      ? "bg-green-500 border-green-500 text-white"
                      : "border-gray-600 text-gray-400"
                  }`}
                >
                  {currentStep > step.id ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <span className="text-sm font-semibold">{step.id}</span>
                  )}
                </div>
                <div className="ml-3">
                  <p className={`text-sm font-medium ${currentStep >= step.id ? "text-white" : "text-gray-400"}`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${currentStep > step.id ? "bg-green-500" : "bg-gray-600"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="p-6">
          {/* Step 1: Upload Photo */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">Upload Your Photo</h3>
                <p className="text-gray-400">Take a clear, well-lit photo for accurate analysis</p>
              </div>

              {uploadedImage ? (
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <img
                      src={uploadedImage || "/placeholder.svg"}
                      alt="Uploaded"
                      className="w-64 h-64 object-cover rounded-xl border-2 border-green-500"
                    />
                    <button
                      onClick={() => setUploadedImage(null)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-green-400 font-medium">Photo uploaded successfully!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="glass-effect border-gray-700 hover:border-green-500 transition-colors cursor-pointer">
                    <CardContent className="p-6 text-center" onClick={handleCameraCapture}>
                      <Camera className="h-12 w-12 text-green-400 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-white mb-2">Take Photo</h4>
                      <p className="text-gray-400 text-sm">Use your camera to take a photo</p>
                    </CardContent>
                  </Card>

                  <Card className="glass-effect border-gray-700 hover:border-green-500 transition-colors cursor-pointer">
                    <CardContent className="p-6 text-center" onClick={() => fileInputRef.current?.click()}>
                      <Upload className="h-12 w-12 text-green-400 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-white mb-2">Upload Photo</h4>
                      <p className="text-gray-400 text-sm">Choose from your gallery</p>
                    </CardContent>
                  </Card>
                </div>
              )}

              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </div>
          )}

          {/* Step 2: Questions */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">Tell Us About Yourself</h3>
                <p className="text-gray-400">Answer a few questions for personalized recommendations</p>
              </div>

              <div className="space-y-6">
                {questions.map((q) => (
                  <Card key={q.id} className="glass-effect border-gray-700">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-white mb-4">{q.question}</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {q.options.map((option) => {
                          const isSelected = q.multiple
                            ? (answers[q.id] || []).includes(option)
                            : answers[q.id] === option

                          return (
                            <button
                              key={option}
                              onClick={() => handleAnswerChange(q.id, option, q.multiple)}
                              className={`p-3 rounded-lg border-2 transition-all ${
                                isSelected
                                  ? "border-green-500 bg-green-500/20 text-green-400"
                                  : "border-gray-600 text-gray-300 hover:border-gray-500"
                              }`}
                            >
                              {option}
                            </button>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Analysis */}
          {currentStep === 3 && (
            <div className="text-center space-y-6">
              <div className="w-24 h-24 mx-auto">
                <div className="relative">
                  <div className="w-24 h-24 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                  <Sparkles className="absolute inset-0 m-auto h-8 w-8 text-green-400" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Analyzing Your Skin</h3>
                <p className="text-gray-400">Our AI is processing your photo and answers...</p>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-gray-500">This may take a few moments</div>
                <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Results */}
          {currentStep === 4 && analysisData && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Your Analysis Results</h3>
                <p className="text-gray-400">Personalized recommendations based on AI analysis</p>
              </div>

              {/* Skin Score */}
              <Card className="glass-effect border-gray-700">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="relative w-20 h-20">
                      <svg className="w-20 h-20 transform -rotate-90">
                        <circle
                          cx="40"
                          cy="40"
                          r="36"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          className="text-gray-700"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r="36"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${analysisData.skinScore * 2.26} 226`}
                          className="text-green-500"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">{analysisData.skinScore}</span>
                      </div>
                    </div>
                    <div className="text-left">
                      <h4 className="text-xl font-bold text-white">Skin Health Score</h4>
                      <p className="text-gray-400">Based on AI analysis</p>
                      <Badge className="mt-2 bg-green-500/20 text-green-400">
                        {analysisData.skinScore >= 80
                          ? "Excellent"
                          : analysisData.skinScore >= 60
                            ? "Good"
                            : "Needs Attention"}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recommended Products */}
              <Card className="glass-effect border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Award className="h-6 w-6 text-green-400 mr-2" />
                    Recommended Products
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {analysisData.recommendations.map((product) => (
                      <Card
                        key={product.id}
                        className="glass-effect border-gray-600 hover:border-green-500 transition-colors cursor-pointer"
                        onClick={() => onProductClick && onProductClick(product)}
                      >
                        <CardContent className="p-4">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-32 object-cover rounded-lg mb-3"
                          />
                          <h5 className="font-semibold text-white text-sm mb-2 line-clamp-2">{product.name}</h5>
                          <div className="flex items-center space-x-1 mb-2">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-300">{product.rating}</span>
                          </div>
                          <div className="flex items-center space-x-2 mb-3">
                            <span className="text-lg font-bold text-green-400">₹{product.price}</span>
                            <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                          </div>
                          <p className="text-xs text-gray-400 mb-3">{product.reason}</p>
                          <div className="flex space-x-2">
                            <Button
                              onClick={(e) => {
                                e.stopPropagation()
                                onAddToCart && onAddToCart(product)
                              }}
                              className="flex-1 bg-green-500 hover:bg-green-600 text-white text-xs py-2"
                            >
                              <ShoppingCart className="h-3 w-3 mr-1" />
                              Add to Cart
                            </Button>
                            <Button
                              onClick={(e) => {
                                e.stopPropagation()
                                onAddToWishlist && onAddToWishlist(product)
                              }}
                              variant="outline"
                              className="p-2 border-gray-600 text-gray-300 hover:text-red-400 hover:border-red-400"
                            >
                              <Heart className="h-3 w-3" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-700">
          <div className="flex space-x-3">
            {currentStep > 1 && currentStep !== 3 && (
              <Button
                onClick={prevStep}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:border-gray-500 bg-transparent"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
            )}
          </div>

          <div className="flex space-x-3">
            {currentStep === 4 ? (
              <Button
                onClick={resetAnalyzer}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
              >
                Analyze Again
              </Button>
            ) : (
              currentStep !== 3 && (
                <Button
                  onClick={nextStep}
                  disabled={
                    (currentStep === 1 && !uploadedImage) || (currentStep === 2 && Object.keys(answers).length === 0)
                  }
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentStep === 2 ? "Start Analysis" : "Next"}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkinHairAnalyzer
