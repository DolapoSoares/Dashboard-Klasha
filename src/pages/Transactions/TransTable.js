import React, { useMemo, useState } from "react"
import { Row, Col } from "reactstrap"
import PropTypes from "prop-types"
import BootstrapTable from "react-bootstrap-table-next"
import filterFactory, { textFilter } from "react-bootstrap-table2-filter"
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator"

const TransTable = ({ loading }) => {
  const transData = [
    {
      transID: "SDGHUYTEWR1245",
      source: "GTB",
      customerName: "Mike Owen",
      customerEmail: "097623456",
      amount: "230.00",
      date: "24.08.2021",
      status: "Pending",
    },
    {
      transID: "SDGHUYTEWR1245",
      source: "UBA",
      customerName: "Jane Owen",
      customerEmail: "097623456",
      amount: "730.00",
      date: "24.08.2021",
      status: "Successful",
    },
    {
      transID: "SDGHUYTEWR1245",
      source: "Union",
      customerName: "Samson Leo",
      customerEmail: "097623456",
      amount: "400.00",
      date: "30.08.2023",
      status: "Pending",
    },
    {
      transID: "SDGHUYTEWR1245",
      source: "UBA",
      customerName: "Johnson Owen",
      customerEmail: "097623456",
      amount: "190.00",
      date: "24.10.2021",
      status: "Successful",
    },
    {
      transID: "SDGHUYTEWR1245",
      source: "Stanbic",
      customerName: "Samson Pathero",
      customerEmail: "097623456",
      amount: "1000.00",
      date: "30.08.2023",
      status: "Pending",
    },
    {
      transID: "SDGHUYTEWR1245",
      source: "UBA",
      customerName: "Johnson Jacob",
      customerEmail: "097623456",
      amount: "190.00",
      date: "24.10.2021",
      status: "Successful",
    },
    {
      transID: "SDGHUYTEWR1245",
      source: "FCMB",
      customerName: "Segun Leo",
      customerEmail: "097623456",
      amount: "400.00",
      date: "30.08.2023",
      status: "Pending",
    },
    {
      transID: "SDGHUYTEWR1245",
      source: "PHB",
      customerName: "Johnson Dolapo",
      customerEmail: "097623456",
      amount: "190.00",
      date: "24.10.2021",
      status: "Successful",
    },
    {
      transID: "SDGHUYTEWR1245",
      source: "Zenith",
      customerName: "Gunther Leo",
      customerEmail: "097623456",
      amount: "750.00",
      date: "30.08.2023",
      status: "Pending",
    },
    {
      transID: "SDGHUYTEWR1245",
      source: "PHB",
      customerName: "Sterling Ramion",
      customerEmail: "097623456",
      amount: "210.00",
      date: "24.10.2021",
      status: "Successful",
    },
    {
      transID: "SDGHUYTEWR1245",
      source: "Baclays",
      customerName: "Gunther Ronaldo",
      customerEmail: "097623456",
      amount: "750.00",
      date: "30.08.2023",
      status: "Failed",
    },
    {
      transID: "SDGHUYTEWR1245",
      source: "Fidelity",
      customerName: "Sterling Messi",
      customerEmail: "097623456",
      amount: "210.00",
      date: "24.10.2021",
      status: "Failed",
    },
    {
      transID: "SDGHUYTEWR1245",
      source: "GTB",
      customerName: "Mike Owen",
      customerEmail: "097623456",
      amount: "230.00",
      date: "24.08.2021",
      status: "Pending",
    },
    {
      transID: "SDGHUYTEWR1245",
      source: "UBA",
      customerName: "Jane Owen",
      customerEmail: "097623456",
      amount: "730.00",
      date: "24.08.2021",
      status: "Successful",
    },
    {
      transID: "SDGHUYTEWR1245",
      source: "Union",
      customerName: "Samson Leo",
      customerEmail: "097623456",
      amount: "400.00",
      date: "30.08.2023",
      status: "Pending",
    },
    {
      transID: "SDGHUYTEWR1245",
      source: "UBA",
      customerName: "Johnson Owen",
      customerEmail: "097623456",
      amount: "190.00",
      date: "24.10.2021",
      status: "Successful",
    },
    {
      transID: "SDGHUYTEWR1245",
      source: "Stanbic",
      customerName: "Samson Pathero",
      customerEmail: "097623456",
      amount: "1000.00",
      date: "30.08.2023",
      status: "Pending",
    },
    {
      transID: "SDGHUYTEWR1245",
      source: "UBA",
      customerName: "Johnson Jacob",
      customerEmail: "097623456",
      amount: "190.00",
      date: "24.10.2021",
      status: "Successful",
    },
    {
      transID: "SDGHUYTEWR1245",
      source: "FCMB",
      customerName: "Segun Leo",
      customerEmail: "097623456",
      amount: "400.00",
      date: "30.08.2023",
      status: "Pending",
    },
    {
      transID: "SDGHUYTEWR1245",
      source: "PHB",
      customerName: "Johnson Dolapo",
      customerEmail: "097623456",
      amount: "190.00",
      date: "24.10.2021",
      status: "Successful",
    },
    {
      transID: "SDGHUYTEWR1245",
      source: "Zenith",
      customerName: "Gunther Leo",
      customerEmail: "097623456",
      amount: "750.00",
      date: "30.08.2023",
      status: "Pending",
    },
    {
      transID: "SDGHUYTEWR1245",
      source: "PHB",
      customerName: "Sterling Ramion",
      customerEmail: "097623456",
      amount: "210.00",
      date: "24.10.2021",
      status: "Successful",
    },
    {
      transID: "SDGHUYTEWR1245",
      source: "Baclays",
      customerName: "Gunther Ronaldo",
      customerEmail: "097623456",
      amount: "750.00",
      date: "30.08.2023",
      status: "Failed",
    },
    {
      transID: "SDGHUYTEWR1245",
      source: "Fidelity",
      customerName: "Sterling Messi",
      customerEmail: "097623456",
      amount: "210.00",
      date: "24.10.2021",
      status: "Failed",
    },
  ]
  const users = transData.length
    ? transData.map((item, index) => {
        return {
          id: index,
          ref: item.transID,
          source: item.source,
          name: item.customerName,
          email: item.customerEmail,
          amount: item.amount,
          date: item.date,
          status: item.status,
        }
      })
    : [
        {
          id: 1,
          ref: "",
          source: "",
          name: "",
          email: "",
          amount: "",
          date: "",
          status: "",
        },
      ]

  const sizePerPage = 5
  const pageOptions = {
    sizePerPage: sizePerPage,
    totalSize: users.length,
    custom: true,
  }

  const contactListColumns = useMemo(
    () => [
      {
        text: "id",
        dataField: "id",
        sort: true,
        hidden: true,
        // eslint-disable-next-line react/display-name
        formatter: id => <>{id}</>,
      },
      {
        text: "S/N",
        formatter: (cell, row, rowIndex) => {
          return rowIndex + 1
        },
        sort: true,
        dataField: "any",
      },
      {
        text: "Transaction ID",
        dataField: "ref",
        sort: true,
        // eslint-disable-next-line react/display-name
        formatter: ref => <>{ref}</>,
      },
      {
        text: "Email",
        dataField: "source",
        sort: true,
        // eslint-disable-next-line react/display-name
        formatter: source => <>{source}</>,
      },
      {
        text: "Name",
        dataField: "name",
        sort: true,
        // eslint-disable-next-line react/display-name
        formatter: name => <>{name}</>,
      },
      {
        text: "Email",
        dataField: "email",
        sort: true,
        // eslint-disable-next-line react/display-name
        formatter: email => <>{email}</>,
      },
      {
        text: "Amount",
        dataField: "amount",
        sort: true,
        // eslint-disable-next-line react/display-name
        formatter: amount => <>{amount}</>,
      },

      {
        text: "Date",
        dataField: "date",
        sort: true,
        // eslint-disable-next-line react/display-name
        formatter: date => <>{date}</>,
      },
      {
        text: "Status",
        dataField: "status",
        sort: true,
        // eslint-disable-next-line react/display-name
        formatter: status => <>{status}</>,
      },
    ],
    []
  )

  return (
    <>
      <div>
        <PaginationProvider pagination={paginationFactory(pageOptions)}>
          {({ paginationProps, paginationTableProps }) => {
            return (
              <>
                <BootstrapTable
                  bootstrap4
                  keyField="id"
                  data={users}
                  columns={contactListColumns}
                  bordered={false}
                  striped={false}
                  filter={filterFactory()}
                  {...paginationTableProps}
                />

                <Row className="align-items-md-center mt-30">
                  <Col className="pagination pagination-rounded justify-content-end mb-2">
                    <PaginationListStandalone {...paginationProps} />
                  </Col>
                </Row>
              </>
            )
          }}
        </PaginationProvider>
      </div>
    </>
  )
}

TransTable.propTypes = {}

export default TransTable
