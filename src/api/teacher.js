import request from '@/utils/request'

export function getTeacherList() {
  return request({
    url: '/tutor/allTutors',
    method: 'get'
  })
}

export function getTeacherInfo() {
  return request({
    url: '/tutor/info',
    method: 'get'
  })
}

export function updateTeacherInfo(data) {
  return request({
    url: '/tutor/update',
    method: 'post',
    data
  })
}

export function addTeacher(data) {
  return request({
    url: '/tutor/add',
    method: 'post',
    data
  })
}

export function removeTeacher(data) {
  return request({
    url: '/tutor/removeById',
    method: 'post',
    data
  })
}