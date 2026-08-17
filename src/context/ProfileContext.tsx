import * as React from "react"
import { useSearchParams } from "react-router-dom"
import type { Profile } from "@/data/mockData"

interface ProfileContextValue {
  profile: Profile
  setProfile: (p: Profile) => void
  raw: boolean
}

const ProfileContext = React.createContext<ProfileContextValue | null>(null)

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = React.useState<Profile>("publico")
  const [searchParams] = useSearchParams()
  const [raw] = React.useState(
    () => searchParams.get("raw") === "1" || searchParams.get("frame") === "off"
  )
  return (
    <ProfileContext.Provider value={{ profile, setProfile, raw }}>
      {children}
    </ProfileContext.Provider>
  )
}

export function useProfile() {
  const ctx = React.useContext(ProfileContext)
  if (!ctx) throw new Error("useProfile must be used within ProfileProvider")
  return ctx
}
