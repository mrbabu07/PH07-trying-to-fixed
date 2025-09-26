import React, { useState } from "react";

const Cart = ({ issues, inProgressTasks, setInProgressTasks, resolvedTasks, setResolvedTasks }) => {

  const handleTaskClick = (issue) => {
    if (!inProgressTasks.find(task => task.id === issue.id)) {
      setInProgressTasks([...inProgressTasks, issue])
    }
  }

  const handleComplete = (task) => {
    setResolvedTasks([...resolvedTasks, task])
    setInProgressTasks(inProgressTasks.filter(t => t.id !== task.id))
  }

  return (
    <div className="container mx-auto grid gird-cols-1 md:grid-cols-3 gap-4 mb-5">
      
      {/* Left Side → Tickets */}
      <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        {issues.map(issue => (
          <div
            key={issue.id}
            onClick={() => handleTaskClick(issue)}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition cursor-pointer w-full"
          >
            {/* Title + Status */}
            <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-3">
              <h2 className="font-semibold text-gray-800">{issue.title}</h2>
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full capitalize ${
                  issue.status === "Open"
                    ? "bg-green-100 text-green-600"
                    : issue.status === "In_Progress"
                    ? "bg-yellow-100 text-yellow-600"
                    : issue.status === "Resolved"
                    ? "bg-blue-100 text-blue-600"
                    : issue.status === "Closed"
                    ? "bg-red-100 text-red-600"
                    : issue.status === "Pending"
                    ? "bg-orange-100 text-orange-600"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {issue.status}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-3">{issue.description}</p>

            {/* Bottom Section */}
            <div className="flex justify-between items-center text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <p className="font-medium text-gray-700">#{issue.id}</p>
                <span
                  className={`font-semibold uppercase ${
                    issue.priority === "High"
                      ? "text-red-600"
                      : issue.priority === "Medium"
                      ? "text-yellow-600"
                      : "text-green-600"
                  }`}
                >
                  {issue.priority}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-700">{issue.customer}</span>
                <p>{issue.createdAt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side → Task Status */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full h-full">
        <h2 className="font-semibold text-lg mb-3">
          Task Status ({inProgressTasks.length})
        </h2>

        {inProgressTasks.length === 0 ? (
          <p className="text-gray-500 text-sm">
            No tasks in progress <br />
            <span className="text-xs">Click on a ticket to start working</span>
          </p>
        ) : (
          <div className="space-y-3">
            {inProgressTasks.map(task => (
              <div
                key={task.id}
                className="justify-between items-center bg-gray-50 px-3 py-2 rounded-lg flex flex-col gap-2"
              >
                <span className="font-medium text-gray-800">{task.title}</span>
                <button
                  onClick={() => handleComplete(task)}
                  className="text-xs bg-green-500 text-white w-full px-3 py-2 rounded"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Resolved Section */}
        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-3">
            Resolved Tasks ({resolvedTasks.length})
          </h2>
          {resolvedTasks.length === 0 ? (
            <p className="text-gray-500 text-sm">No resolved tasks yet</p>
          ) : (
            resolvedTasks.map(task => (
              <div
                key={task.id}
                className="p-2 bg-gray-100 rounded mb-2 text-gray-700"
              >
                {task.title}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
