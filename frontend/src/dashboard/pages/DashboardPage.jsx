import React from 'react'
import SearchMemberForm from '../components/SearchMemberForm'
import MemberCard from '../components/MemberCard'
import useDashboard from '../hooks/useDashboard'
import './dashboard.css'

const DashboardPage = () => {
  const {
    query,
    setQuery,
    member,
    handleSearch,
    handleClear,
    loading,
    error
  } = useDashboard()

  return (
    <>
    <div className='dashboard'>
      <h2 className="mb-4">Bienvenido al Sistema de Gestión</h2>

      <SearchMemberForm
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
        onClear={handleClear}
        loading={loading}
      />

      {error && <div className="alert alert-danger mt-3">{error}</div>}

      {member && (
        <div className="mt-4">
          <MemberCard member={member} />
        </div>

)}
    </div>


</>
  )
}

export default DashboardPage
