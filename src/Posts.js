import React, { useState, useEffect } from 'react'
import { getPostsAsync } from './ApiService'

import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import paginationFactory from 'react-bootstrap-table2-paginator'

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'

const Posts = () => {
  const [state, setState] = useState({ loading: true, posts: [] })

  useEffect(() => {
    const loadDataAsync = async () => {
      const posts = await getPostsAsync()
      setState({ loading: false, posts })
    }
    loadDataAsync()
  }, [])

  if (state.loading) return <h1>Wait for it...</h1>

  return (
    <>
      <ToolkitProvider keyField='id' columns={columns} data={state.posts} search>
        {toolkitProps => (
          <>
            <header style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1em' }}>
              <h1>Posts - {state.posts.length}</h1>
              <Search.SearchBar {...toolkitProps.searchProps} placeholder={'Keyword Search'} />
            </header>
            <BootstrapTable
              {...toolkitProps.baseProps}
              bootstrap4
              bordered={false}
              condensed
              pagination={paginationFactory({
                showTotal: true,
                hideSizePerPage: false,
                sizePerPage: 10
              })}
              striped
            />
          </>
        )}
      </ToolkitProvider>
    </>
  )
}

const columns = [
  { dataField: 'user.name', text: 'Blogger', sort: true },
  { dataField: 'title', text: 'Category', sort: true }
]

export default Posts
