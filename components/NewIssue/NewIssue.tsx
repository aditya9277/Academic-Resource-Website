import { FC } from 'react'
import Link from 'next/link'

const NewIssue: FC = () => {
  return (
    <div className="pt-6 md:p-0 text-xl w-fit m-auto">
      <span>Be the first to add by creating a GitHub issue </span>
      <Link
        className="dark:text-theme-primary text-theme-secondary underline"
        href="https://github.com/Romit77/Academic-Resource-Website"
        target="_blank"
        aria-label="Page to create new Issue"
      >
        here
      </Link>
    </div>
  )
}

export default NewIssue
