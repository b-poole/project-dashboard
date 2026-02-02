import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import './App.css'
import IssuesPage from './features/issues/pages/IssuesPage'
import IssueDetailPage from './features/issues/pages/IssueDetailPage' 
import CreateIssuePage from './features/issues/pages/CreateIssuePage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/issues" replace />} />
        <Route path="/issues" element={<IssuesPage />} />
        <Route path="/issues/new" element={<CreateIssuePage />} />
        <Route path="/issues/:issueId" element={<IssueDetailPage />} />
      </Route>
    </Routes>
  )
}

export default App
