import React from 'react'
import Navbar from '../comporents/general/Navbar'
import Sidebar from '../comporents/general/Sidebar'
import { FaPlusCircle, FaUser } from "react-icons/fa";
import { FaCheckCircle } from 'react-icons/fa';
import { HiPencilSquare } from "react-icons/hi2";
import { FaBed } from "react-icons/fa";


const AdminLayout = ({ children }) => {

  const data = [
    { "name": "Dashboard", url: "/admin", icon: FaUser },
    { "name": "Rezervasyonlar", url: "/admin/Reservations", icon: HiPencilSquare },
    { "name": "Odalar", url: "/admin/room", icon: FaCheckCircle },
    { "name": "Müşteriler", url: "/admin/customers", icon: FaBed },
    { "name": "Geri Bildirimler", url: "/admin/feedback", icon: FaPlusCircle },
    { "name": "Yorumlar", url: "/admin/comment", icon: FaPlusCircle },
    { "name": "galeri", url: "/admin/gallery", icon: FaPlusCircle },
    { "name": "Aktiviteler", url: "/admin/activities", icon: FaPlusCircle },
    { "name": "Restorant", url: "/admin/", icon: FaPlusCircle },

    { "name": "Siteye Git", url: "/", icon: FaPlusCircle },

  ]


  return (
    <>
      <Navbar user="admin" />
      <div className="profile-content">
        <Sidebar menuData={data} title="Admin Panel" />
        <div className='profile-content-children'>

          {children}

        </div>
      </div>
    </>
  )
}

export default AdminLayout
