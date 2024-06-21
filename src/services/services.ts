import { TeamResponse, TeamsGameResponse } from "utils/types/responses"
import { api } from "./config"

export const getTeamsGame = async (team: string): Promise<TeamsGameResponse> => {
  let url = `/api/Team/getTeamsByType?`
  url += `teamType=${team}`
  const response = await api.get(url)
  return response.data
}

export const getTeam = async (slug: string): Promise<TeamResponse> => {
  const request = `/api/Team/slug/${slug}`
  const response = await api.get(request)
  return response.data
}