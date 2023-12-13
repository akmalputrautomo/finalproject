import React from 'react'
import http from '../utils/Http'
import { endpoint } from '../utils/endpoint'

export const getDataKursusPopuler = async () => {
  return await http.get(endpoint.COURSE_POPULAR) 
  
}
