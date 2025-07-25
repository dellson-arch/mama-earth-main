"use client"

import { useState } from "react"
import { Button } from "./ui/Button"
import { Input } from "./ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/Badge"
import { User, Mail, Lock, ArrowLeft, Eye, EyeOff, LogOut, Settings, Package, Heart } from "lucide-react"

const SignInPage = ({ onSignIn, onBack, userProfile, onSignOut }) => {
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isSignUp) {
      // Sign up logic
      const userData = {
        id: Date.now(),
        name: `${formData.firstName} ${formData.lastName}`,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        avatar: `https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face`,
        joinDate: new Date().toISOString(),
        orders: [],
        preferences: {},
      }
      onSignIn(userData)
    } else {
      // Sign in logic
      const userData = {
        id: 1,
        name: "Priya Sharma",
        firstName: "Priya",
        lastName: "Sharma",
        email: formData.email,
        phone: "+91 9876543210",
        avatar: `https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face`,
        joinDate: "2023-01-15",
        orders: [
          {
            id: "ORD001",
            date: "2024-01-10",
            total: 899,
            status: "Delivered",
            items: 3,
          },
          {
            id: "ORD002",
            date: "2024-01-05",
            total: 1299,
            status: "Processing",
            items: 2,
          },
        ],
        preferences: {
          skinType: "Combination",
          concerns: ["Acne", "Dark Spots"],
        },
      }
      onSignIn(userData)
    }
  }

  // If user is already signed in, show profile page
  if (userProfile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button onClick={onBack} variant="ghost" className="text-gray-400 hover:text-white">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-white">My Profile</h1>
                <p className="text-gray-400">Manage your account and preferences</p>
              </div>
            </div>
            <Button
              onClick={onSignOut}
              variant="outline"
              className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white bg-transparent"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Info */}
            <div className="lg:col-span-1">
              <Card className="glass-effect border-gray-700">
                <CardContent className="p-6 text-center">
                  <img
                    src={userProfile.avatar || "/placeholder.svg"}
                    alt={userProfile.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-500/30"
                  />
                  <h2 className="text-xl font-bold text-white mb-2">{userProfile.name}</h2>
                  <p className="text-gray-400 mb-4">{userProfile.email}</p>
                  <Badge className="bg-green-500/20 text-green-400 mb-4">
                    Member since {new Date(userProfile.joinDate).getFullYear()}
                  </Badge>

                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Account Details & Orders */}
            <div className="lg:col-span-2 space-y-6">
              {/* Account Information */}
              <Card className="glass-effect border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Account Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                      <Input
                        value={userProfile.firstName}
                        className="bg-gray-800 border-gray-700 text-white"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                      <Input value={userProfile.lastName} className="bg-gray-800 border-gray-700 text-white" readOnly />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <Input value={userProfile.email} className="bg-gray-800 border-gray-700 text-white" readOnly />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <Input value={userProfile.phone} className="bg-gray-800 border-gray-700 text-white" readOnly />
                  </div>
                </CardContent>
              </Card>

              {/* Recent Orders */}
              <Card className="glass-effect border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Package className="h-5 w-5 mr-2" />
                    Recent Orders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {userProfile.orders && userProfile.orders.length > 0 ? (
                    <div className="space-y-4">
                      {userProfile.orders.map((order) => (
                        <div
                          key={order.id}
                          className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700"
                        >
                          <div>
                            <h4 className="font-medium text-white">Order #{order.id}</h4>
                            <p className="text-sm text-gray-400">{new Date(order.date).toLocaleDateString()}</p>
                            <p className="text-sm text-gray-400">{order.items} items</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-green-400">₹{order.total}</p>
                            <Badge
                              className={`text-xs ${
                                order.status === "Delivered"
                                  ? "bg-green-500/20 text-green-400"
                                  : order.status === "Processing"
                                    ? "bg-yellow-500/20 text-yellow-400"
                                    : "bg-blue-500/20 text-blue-400"
                              }`}
                            >
                              {order.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Package className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                      <p className="text-gray-400">No orders yet</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Preferences */}
              {userProfile.preferences && (
                <Card className="glass-effect border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Heart className="h-5 w-5 mr-2" />
                      Beauty Preferences
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userProfile.preferences.skinType && (
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Skin Type</label>
                          <Badge className="bg-blue-500/20 text-blue-400">{userProfile.preferences.skinType}</Badge>
                        </div>
                      )}

                      {userProfile.preferences.concerns && (
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">Main Concerns</label>
                          <div className="flex flex-wrap gap-2">
                            {userProfile.preferences.concerns.map((concern, index) => (
                              <Badge key={index} className="bg-orange-500/20 text-orange-400">
                                {concern}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Sign in/up form
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center py-8">
      <div className="max-w-md w-full mx-auto px-4">
        {/* Header */}
        <div className="mb-8 flex items-center space-x-4">
          <Button onClick={onBack} variant="ghost" className="text-gray-400 hover:text-white">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-white">{isSignUp ? "Create Account" : "Welcome Back"}</h1>
            <p className="text-gray-400">{isSignUp ? "Join the MamaEarth family" : "Sign in to your account"}</p>
          </div>
        </div>

        <Card className="glass-effect border-gray-700">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 bg-gray-800 border-gray-700 text-white"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 pr-10 bg-gray-800 border-gray-700 text-white"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                <User className="h-4 w-4 mr-2" />
                {isSignUp ? "Create Account" : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="ml-2 text-green-400 hover:text-green-300 font-medium"
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SignInPage
