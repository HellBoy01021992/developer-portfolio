import axios, { AxiosInstance } from 'axios'
import {
  ApiResponse,
  Profile,
  Experience,
  Project,
  Skill,
  Certification,
  Education,
  Award,
  SocialLinks,
  Contact,
} from '../types'

const API_URL = import.meta.env.VITE_API_URL

export const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const portfolioApi = {
  getProfile: () => apiClient.get<ApiResponse<Profile>>('/profile'),
  getExperience: () => apiClient.get<ApiResponse<Experience[]>>('/experience'),
  getProjects: () => apiClient.get<ApiResponse<Project[]>>('/projects'),
  getSkills: () => apiClient.get<ApiResponse<Skill>>('/skills'),
  getCertifications: () => apiClient.get<ApiResponse<Certification[]>>('/certifications'),
  getAwards: () => apiClient.get<ApiResponse<Award[]>>('/awards'),
  getEducation: () => apiClient.get<ApiResponse<Education[]>>('/education'),
  getSocialLinks: () => apiClient.get<ApiResponse<SocialLinks>>('/social-links'),
  getContact: () => apiClient.get<ApiResponse<Contact>>('/contact'),
}
