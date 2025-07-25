"use client"

import { useState } from "react"
import { Button } from "./ui/Button"
import { Input } from "./ui/Input"
import { Card, CardContent } from "./ui/card"
import { Mail, Gift, Bell, CheckCircle } from "lucide-react"

const NewsletterSection = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="glass-effect border-gray-700/50 shadow-2xl bg-transparent overflow-hidden">
          <CardContent className="p-12 text-center relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border border-green-500 rounded-full" />
              <div className="absolute top-20 right-20 w-16 h-16 border border-blue-500 rounded-full" />
              <div className="absolute bottom-10 left-20 w-12 h-12 border border-purple-500 rounded-full" />
              <div className="absolute bottom-20 right-10 w-24 h-24 border border-yellow-500 rounded-full" />
            </div>

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>

              {/* Heading */}
              <h2 className="text-4xl font-black text-white mb-4">Stay Updated with Natural Beauty Tips</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Get exclusive offers, skincare tips, and be the first to know about new natural products
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    icon: Gift,
                    title: "Exclusive Offers",
                    description: "Get 20% off on your first order",
                  },
                  {
                    icon: Bell,
                    title: "Early Access",
                    description: "Be first to try new products",
                  },
                  {
                    icon: CheckCircle,
                    title: "Expert Tips",
                    description: "Weekly beauty and wellness tips",
                  },
                ].map((benefit, index) => {
                  const IconComponent = benefit.icon
                  return (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="h-6 w-6 text-green-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-sm text-gray-400">{benefit.description}</p>
                    </div>
                  )
                })}
              </div>

              {/* Newsletter Form */}
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-green-500"
                      required
                    />
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 font-semibold rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                    >
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    By subscribing, you agree to our Privacy Policy and Terms of Service
                  </p>
                </form>
              ) : (
                <div className="max-w-md mx-auto">
                  <div className="flex items-center justify-center space-x-2 text-green-400 mb-4">
                    <CheckCircle className="h-6 w-6" />
                    <span className="text-lg font-semibold">Successfully Subscribed!</span>
                  </div>
                  <p className="text-gray-400">
                    Thank you for joining our community. Check your email for a welcome gift!
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default NewsletterSection
