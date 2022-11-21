import siteMetadata from '@/data/siteMetadata'
import ContactLink from '@/components/ContactLink'
import { PageSEO } from '@/components/SEO'
import { useState } from 'react'
const Contact = () => {
  const [sendedData, setSendedData] = useState({
    guestName: '',
    messageTitle: '',
    email: '',
    message: '',
  })
  const changer = (e) => {
    setSendedData({ ...sendedData, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('https://rlcxc7pxe8.execute-api.us-east-2.amazonaws.com/v1/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendedData),
    })
      .then((res) => res.json())
      .catch((e) => {
        console.log(e)
      })
    if (res.success) {
      alert('Your request saved! I will contact you ASAP!')
    } else {
      alert('Error!')
    }
  }
  return (
    <>
      <PageSEO title={`Contact - ${siteMetadata.author}`} description="All my contacts" />
      <div className="mx-auto max-w-3xl overflow-hidden">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Contact
        </h1>
        <form onSubmit={handleSubmit} className="mt-8 mb-8 space-y-6 px-8">
          <div className="my-5">
            <label>Your name</label>
            <input
              onChange={changer}
              value={sendedData.guestName}
              name="guestName"
              type="text"
              required="required"
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
              placeholder="Your Name"
            />
          </div>
          <div className="my-5">
            <label>Email</label>
            <input
              onChange={changer}
              value={sendedData.email}
              name="email"
              type="email"
              required="required"
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div className="my-5">
            <label>Title</label>
            <input
              onChange={changer}
              value={sendedData.title}
              name="messageTitle"
              type="text"
              required="required"
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
              placeholder="Title"
            />
          </div>
          <div className="my-5">
            <label>Message</label>
            <textarea
              rows={12}
              onChange={changer}
              value={sendedData.message}
              name="message"
              type="text"
              required="required"
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
              placeholder="Message"
            />
          </div>
          <button
            type="submit"
            className="group relative mt-10 flex w-full justify-center rounded-md border border-transparent bg-purple-600 py-2 px-4 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Other options
        </h1>
        <div className="pt-10 pb-8">
          <ul className="font-semi-bold flex flex-col space-y-4">
            <ContactLink href="mailto:shohwebper@gmail.com" title="gmail" icon="shohwebper" />
            <ContactLink
              href="https://github.com/Shokhrukh2606"
              title="github"
              icon="Shokhrukh2606"
            />
            <ContactLink href="https://twitter.com/shohwebper" title="twitter" icon="shohwebper" />
            <ContactLink
              href="https://www.linkedin.com/in/shokhrukh-toshniyozov/"
              title="linkedin"
              icon="shokhrukh-toshniyozov"
            />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact
