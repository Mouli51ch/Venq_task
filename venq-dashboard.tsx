"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BarChart2,
  ChevronRight,
  Clock,
  FileText,
  Gift,
  Home,
  LogOut,
  Menu,
  Play,
  User,
  Users,
  Wallet,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function VenqDashboard() {
  const [username, setUsername] = useState("Sakshamm")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const SidebarContent = () => (
    <div className="h-full flex flex-col bg-black text-white">
      <div className="p-4 border-b border-gray-800">
        <div className="mb-4">
          <Image src="/venq-logo-white.png" alt="VENQ Logo" width={80} height={30} className="mb-4" />
        </div>
        <Button
          variant="outline"
          className="w-full bg-white text-black rounded-md text-xs py-1 h-8 flex items-center justify-start"
        >
          <Home className="h-4 w-4 mr-2" /> Properties
        </Button>
      </div>

      <div className="p-2 text-xs text-gray-400 overflow-y-auto">
        <div className="mb-4">
          <p className="px-2 py-1 uppercase font-semibold text-[10px]">General</p>
          <Link href="#" className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800">
            <Home className="h-4 w-4 mr-2" /> Home
          </Link>
          <Link href="#" className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800">
            <BarChart2 className="h-4 w-4 mr-2" /> Portfolio
          </Link>
          <Link href="#" className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800">
            <Wallet className="h-4 w-4 mr-2" /> Wallet
          </Link>
        </div>

        <div className="mb-4">
          <p className="px-2 py-1 uppercase font-semibold text-[10px]">Products</p>
          <Link href="#" className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800">
            <Wallet className="h-4 w-4 mr-2" /> Invest
          </Link>
          <Link href="#" className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800">
            <Clock className="h-4 w-4 mr-2" /> Trade
          </Link>
          <Link href="#" className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800">
            <Users className="h-4 w-4 mr-2" /> Fractional Investment Group
          </Link>
          <Link href="#" className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800">
            <User className="h-4 w-4 mr-2" /> SmartInvest™
          </Link>
        </div>

        <div className="mb-4">
          <p className="px-2 py-1 uppercase font-semibold text-[10px]">Analytics</p>
          <Link href="#" className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800">
            <BarChart2 className="h-4 w-4 mr-2" /> Transactions
          </Link>
          <Link href="#" className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800">
            <Clock className="h-4 w-4 mr-2" /> Order History
          </Link>
          <Link href="#" className="flex items-center px-2 py-2 rounded-md hover:bg-gray-800">
            <FileText className="h-4 w-4 mr-2" /> Reports
          </Link>
        </div>
      </div>

      <div className="mt-auto p-2 border-t border-gray-800">
        <div className="flex items-center justify-between px-2 py-1 text-xs">
          <div className="flex items-center">
            <LogOut className="h-4 w-4 mr-1" />
            <span>Log Out</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>Notifications</span>
          </div>
        </div>
        <div className="flex items-center mt-2 bg-gray-800 rounded-md p-2">
          <div className="w-6 h-6 rounded-full bg-gray-600 mr-2"></div>
          <span className="text-xs">Sakshamm</span>
        </div>
      </div>
    </div>
  )

  const ConnectNowSection = () => (
    <div className="space-y-4">
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <p className="text-xs text-emerald-500 font-medium mb-1">CALL US ANYTIME</p>
        <h3 className="font-medium text-lg mb-2">Connect Now!</h3>
        <p className="text-xs text-gray-600 mb-4">Your Investment Manager is here for you anytime you need help.</p>

        <Button className="w-full bg-black text-white text-sm rounded-md flex items-center justify-center py-5">
          <Phone className="h-4 w-4 mr-2" /> Book a Call Now
        </Button>
      </div>

      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="font-medium text-lg mb-2">Only 2 Steps to go</h3>
        <div className="w-full h-1 bg-gray-200 mb-3 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-500 rounded-full" style={{ width: "33%" }}></div>
        </div>
        <p className="text-xs text-gray-600 mb-6 border-b pb-4">
          Complete the steps to get your Investment Journey kickstarted now!
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[12px] top-[24px] w-[2px] h-[calc(100%-24px)] bg-gray-200"></div>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white mr-3 z-10">
                <Check className="h-3 w-3" />
              </div>
              <p className="text-sm pt-1">Account Creation</p>
            </div>

            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full border-2 border-emerald-500 bg-white mr-3 z-10"></div>
              <p className="text-sm pt-1">Complete KYC</p>
            </div>

            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full border-2 border-gray-300 bg-white mr-3 z-10"></div>
              <p className="text-sm text-gray-500 pt-1">Make your first Investment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Mobile Header */}
      <div className="md:hidden bg-black text-white p-4 flex justify-between items-center">
        <Image src="/venq-logo.png" alt="VENQ Logo" width={80} height={30} />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-[250px] bg-black">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block md:w-[180px] bg-black text-white flex-shrink-0">
        <SidebarContent />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* KYC Banner */}
        <div className="w-full px-4 py-4 md:py-5">
          <div className="bg-black text-white p-3 md:p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 rounded-xl">
            <p className="text-xs md:text-sm">Complete your KYC now to kickstart your Real Estate Investment Journey</p>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs rounded-md px-4 whitespace-nowrap">
              Complete KYC <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* Main Dashboard */}
        <div className="p-4 md:p-6 overflow-y-auto">
          <div className="mb-6 md:mb-8">
            <h2 className="text-lg md:text-xl">
              Hey, <span className="text-emerald-500">{username}!</span>
            </h2>
            <p className="text-xs md:text-sm text-gray-600">Lets begin your real estate investment journey.</p>
          </div>

          <div className="mb-6 md:mb-8">
            <p className="text-xs text-gray-500 mb-2">INVEST IN</p>
            <div className="h-px bg-gray-300 mb-4"></div>

            <div className="grid grid-cols-3 gap-4 mb-6 md:mb-8">
              <div className="flex flex-col items-center justify-center p-3 bg-white rounded-md shadow-sm">
                <h3 className="text-sm md:text-base font-medium">MCA</h3>
                <p className="text-xs text-gray-500">Regulated</p>
              </div>
              <div className="flex flex-col items-center justify-center p-3 bg-white rounded-md shadow-sm">
                <h3 className="text-sm md:text-base font-medium">₹5000</h3>
                <p className="text-xs text-gray-500">Minimum Investment</p>
              </div>
              <div className="flex flex-col items-center justify-center p-3 bg-white rounded-md shadow-sm">
                <h3 className="text-sm md:text-base font-medium">HIGH</h3>
                <p className="text-xs text-gray-500">Liquidity</p>
              </div>
            </div>
          </div>

          <div className="mb-6 md:mb-8">
            <p className="text-xs text-gray-500 mb-2">HOW IT WORKS</p>
            <div className="h-px bg-gray-300 mb-4"></div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative bg-white p-3 rounded-md shadow-sm">
                  <Image
                    src="/how-it-works-diagram.png"
                    alt="How VENQ works diagram"
                    width={600}
                    height={300}
                    className="w-full object-contain"
                  />
                </div>
              </div>
              <div className="w-full md:w-32">
                <div className="bg-black rounded-md aspect-square flex items-center justify-center max-w-[150px] mx-auto md:mx-0">
                  <div className="bg-white rounded-full p-2">
                    <Play className="h-6 w-6 text-black" />
                  </div>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <p className="text-xs">Watch Explainer Video</p>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs text-gray-500 mb-2">REFER VENQ</p>
            <div className="h-px bg-gray-300 mb-4"></div>

            <div className="bg-emerald-500 rounded-md p-4 flex justify-between items-center text-white">
              <div className="flex items-center">
                <div className="bg-emerald-600 p-2 rounded-md mr-3">
                  <Gift className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs">REFER A FRIEND</p>
                  <p className="font-medium">Earn up to ₹2,000</p>
                </div>
              </div>
              <Button variant="ghost" className="bg-emerald-600 hover:bg-emerald-700 h-8 w-8 p-0 rounded-md">
                <ArrowRight className="h-4 w-4 text-white" />
              </Button>
            </div>
          </div>

          {/* Mobile Right Sidebar (shown below content on mobile) */}
          <div className="block md:hidden mt-6 pt-6 border-t border-gray-200">
            <ConnectNowSection />
          </div>
        </div>
      </div>

      {/* Desktop Right Sidebar */}
      <div className="hidden md:block md:w-[250px] bg-gray-100 p-4 border-l border-gray-200 overflow-y-auto">
        <ConnectNowSection />
      </div>
    </div>
  )
}

function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function Phone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
