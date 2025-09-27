'use client';
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

type User = {
  id: number
  email: string
  username: string
  first_name: string
  last_name: string
  phone: string
  address: string
}

const exampleUser: User = {
  id: 3,
  email: "parent@gmail.com",
  username: "parenttest",
  first_name: "parent",
  last_name: "user",
  phone: "+491774412160",
  address: "Maximilianstraße, 40A , appartment 9",
}

export default function UserSettingsPage() {
  const [email, setEmail] = useState(exampleUser.email)
  const [username, setUsername] = useState(exampleUser.username)
  const [phone, setPhone] = useState(exampleUser.phone)
  const [address, setAddress] = useState(exampleUser.address)
  const [password, setPassword] = useState("")
  const [notifications, setNotifications] = useState({
    emails: true,
    progress: true,
  })

  const handleSave = () => {
    // Send update request to API
    console.log({ email, username, phone, address, password, notifications })
    alert("Settings saved!")
  }

  return (
    <div className="min-h-screen mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account settings and preferences</p>
        </div>

        <div className="space-y-12">
          {/* Profile Info Card */}
          <div className="grid grid-cols-2 gap-6">
          <Card className="shadow-sm">
            <CardHeader className="pb-4 border-b">
              <CardTitle className="text-xl flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                  <Input 
                    id="email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-sm font-medium">Username</Label>
                  <Input 
                    id="username"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    className="focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">Phone</Label>
                  <Input 
                    id="phone"
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    className="focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address" className="text-sm font-medium">Address</Label>
                  <Input 
                    id="address"
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                    className="focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Change Password Card */}
          <Card className="shadow-sm">
            <CardHeader className="pb-4 border-b">
              <CardTitle className="text-xl flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Change Password
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-2 max-w-md">
                <Label htmlFor="password" className="text-sm font-medium">New Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">Use 8 or more characters with a mix of letters, numbers & symbols</p>
              </div>
            </CardContent>
          </Card>
          </div>

          {/* Notifications Card */}
          <Card className="shadow-sm">
            <CardHeader className="pb-4 border-b">
              <CardTitle className="text-xl flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">Email notifications</p>
                    <p className="text-sm text-gray-500">Receive notifications via email</p>
                  </div>
                  <Switch
                    checked={notifications.emails}
                    onCheckedChange={(checked) =>
                      setNotifications((prev) => ({ ...prev, emails: checked }))
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">Progress notifications</p>
                    <p className="text-sm text-gray-500">Get updates on your progress</p>
                  </div>
                  <Switch
                    checked={notifications.progress}
                    onCheckedChange={(checked) =>
                      setNotifications((prev) => ({ ...prev, progress: checked }))
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end space-x-4 pt-4">
            <Button variant="outline" className="px-6">
              Cancel
            </Button>
            <Button onClick={handleSave} className="">
              Save Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}