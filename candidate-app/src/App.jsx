import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import JobCardList from "./components/JobCard/JobCardList";
import Loading from "./components/Loader/Loader"

import useInfiniteScroll from "./customHooks/useInfiniteScroll";
import demoFilteredData from "./data/demoFilterdData";

function App() {
  
  const [offset, setOffset] = useState(0);
  const fetchData = async () => {
    try {
      console.log("fetch data")
    } catch (error) {
      console.log(error)
    }
  }
  
  const loading = useInfiniteScroll(fetchData, offset, setOffset);

  const filteredData = demoFilteredData;
  const jobDataList = [
    {
        "jdUid": "cfff35ac-053c-11ef-83d3-06301d0a7178-92010",
        "jdLink": "https://weekday.works",
        "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        "maxJdSalary": 61,
        "minJdSalary": null,
        "salaryCurrencyCode": "USD",
        "location": "delhi ncr",
        "minExp": 3,
        "maxExp": 6,
        "jobRole": "frontend",
        "companyName": "Soylent Corporation",
        "logoUrl": "https://logo.clearbit.com/dropbox.com",
        "mode": "Remote"
    },
    {
        "jdUid": "cfff35ba-053c-11ef-83d3-06301d0a7178-92012",
        "jdLink": "https://weekday.works",
        "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        "maxJdSalary": 103,
        "minJdSalary": 100,
        "salaryCurrencyCode": "USD",
        "location": "mumbai",
        "minExp": null,
        "maxExp": null,
        "jobRole": "ios",
        "companyName": "The Syndicate",
        "logoUrl": "https://logo.clearbit.com/lg.com",
        "mode": "Hybrid"
    },
    {
        "jdUid": "cfff35d4-053c-11ef-83d3-06301d0a7178-92016",
        "jdLink": "https://weekday.works",
        "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        "maxJdSalary": 28,
        "minJdSalary": 26,
        "salaryCurrencyCode": "USD",
        "location": "remote",
        "minExp": 2,
        "maxExp": 11,
        "jobRole": "android",
        "companyName": "The First Order",
        "logoUrl": "https://logo.clearbit.com/sony.com",
        "mode": "In-Office"
    },
    {
        "jdUid": "cfff35e1-053c-11ef-83d3-06301d0a7178-92018",
        "jdLink": "https://weekday.works",
        "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        "maxJdSalary": 45,
        "minJdSalary": 35,
        "salaryCurrencyCode": "USD",
        "location": "chennai",
        "minExp": 5,
        "maxExp": 6,
        "jobRole": "tech lead",
        "companyName": "The Company",
        "logoUrl": "https://logo.clearbit.com/adobe.com",
        "mode": "Hybrid"
    },
    {
        "jdUid": "cfff35ed-053c-11ef-83d3-06301d0a7178-92020",
        "jdLink": "https://weekday.works",
        "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        "maxJdSalary": 48,
        "minJdSalary": 26,
        "salaryCurrencyCode": "USD",
        "location": "delhi ncr",
        "minExp": 1,
        "maxExp": 8,
        "jobRole": "frontend",
        "companyName": "Tyrell Corporation",
        "logoUrl": "https://logo.clearbit.com/hp.com",
        "mode": "Remote"
    },
    {
        "jdUid": "cfff35fb-053c-11ef-83d3-06301d0a7178-92022",
        "jdLink": "https://weekday.works",
        "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        "maxJdSalary": 19,
        "minJdSalary": 15,
        "salaryCurrencyCode": "USD",
        "location": "mumbai",
        "minExp": 8,
        "maxExp": 9,
        "jobRole": "ios",
        "companyName": "The Syndicate",
        "logoUrl": "https://logo.clearbit.com/ebay.com",
        "mode": "Remote"
    },
    {
        "jdUid": "cfff3608-053c-11ef-83d3-06301d0a7178-92024",
        "jdLink": "https://weekday.works",
        "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        "maxJdSalary": 78,
        "minJdSalary": 64,
        "salaryCurrencyCode": "USD",
        "location": "bangalore",
        "minExp": 7,
        "maxExp": 15,
        "jobRole": "backend",
        "companyName": "Weyland-Yutani Corporation",
        "logoUrl": "https://logo.clearbit.com/tencent.com",
        "mode": "Hybrid"
    },
    {
        "jdUid": "cfff3614-053c-11ef-83d3-06301d0a7178-92026",
        "jdLink": "https://weekday.works",
        "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        "maxJdSalary": 5,
        "minJdSalary": 3,
        "salaryCurrencyCode": "USD",
        "location": "remote",
        "minExp": 3,
        "maxExp": 12,
        "jobRole": "android",
        "companyName": "LexCorp",
        "logoUrl": "https://logo.clearbit.com/apple.com",
        "mode": "In-Office"
    },
    {
        "jdUid": "cfff3621-053c-11ef-83d3-06301d0a7178-92028",
        "jdLink": "https://weekday.works",
        "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        "maxJdSalary": 33,
        "minJdSalary": 23,
        "salaryCurrencyCode": "USD",
        "location": "chennai",
        "minExp": 1,
        "maxExp": 5,
        "jobRole": "tech lead",
        "companyName": "The Resistance",
        "logoUrl": "https://logo.clearbit.com/asus.com",
        "mode": "Hybrid"
    },
    {
        "jdUid": "cfff35ac-053c-11ef-83d3-06301d0a7178-92010",
        "jdLink": "https://weekday.works",
        "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        "maxJdSalary": 61,
        "minJdSalary": null,
        "salaryCurrencyCode": "USD",
        "location": "delhi ncr",
        "minExp": 3,
        "maxExp": 6,
        "jobRole": "frontend",
        "companyName": "The Umbrella Academy",
        "logoUrl": "https://logo.clearbit.com/dropbox.com",
        "mode": "Remote"
    },
    {
        "jdUid": "cfff35ba-053c-11ef-83d3-06301d0a7178-92012",
        "jdLink": "https://weekday.works",
        "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        "maxJdSalary": 103,
        "minJdSalary": 100,
        "salaryCurrencyCode": "USD",
        "location": "mumbai",
        "minExp": null,
        "maxExp": null,
        "jobRole": "ios",
        "companyName": "The Corporation",
        "logoUrl": "https://logo.clearbit.com/lg.com",
        "mode": "In-Office"
    },
    {
        "jdUid": "cfff35d4-053c-11ef-83d3-06301d0a7178-92016",
        "jdLink": "https://weekday.works",
        "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        "maxJdSalary": 28,
        "minJdSalary": 26,
        "salaryCurrencyCode": "USD",
        "location": "remote",
        "minExp": 2,
        "maxExp": 11,
        "jobRole": "android",
        "companyName": "LexCorp",
        "logoUrl": "https://logo.clearbit.com/sony.com",
        "mode": "Hybrid"
    },
    {
        "jdUid": "cfff35e1-053c-11ef-83d3-06301d0a7178-92018",
        "jdLink": "https://weekday.works",
        "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        "maxJdSalary": 45,
        "minJdSalary": 35,
        "salaryCurrencyCode": "USD",
        "location": "chennai",
        "minExp": 5,
        "maxExp": 6,
        "jobRole": "tech lead",
        "companyName": "The Corporation",
        "logoUrl": "https://logo.clearbit.com/adobe.com",
        "mode": "Remote"
    },
    {
        "jdUid": "cfff35ed-053c-11ef-83d3-06301d0a7178-92020",
        "jdLink": "https://weekday.works",
        "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        "maxJdSalary": 48,
        "minJdSalary": 26,
        "salaryCurrencyCode": "USD",
        "location": "delhi ncr",
        "minExp": 1,
        "maxExp": 8,
        "jobRole": "frontend",
        "companyName": "The Galactic Senate",
        "logoUrl": "https://logo.clearbit.com/hp.com",
        "mode": "Remote"
    },
    {
        "jdUid": "cfff35fb-053c-11ef-83d3-06301d0a7178-92022",
        "jdLink": "https://weekday.works",
        "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        "maxJdSalary": 19,
        "minJdSalary": 15,
        "salaryCurrencyCode": "USD",
        "location": "mumbai",
        "minExp": 8,
        "maxExp": 9,
        "jobRole": "ios",
        "companyName": "Gringotts Wizarding Bank",
        "logoUrl": "https://logo.clearbit.com/ebay.com",
        "mode": "In-Office"
    },
    {
        "jdUid": "cfff3608-053c-11ef-83d3-06301d0a7178-92024",
        "jdLink": "https://weekday.works",
        "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        "maxJdSalary": 78,
        "minJdSalary": 64,
        "salaryCurrencyCode": "USD",
        "location": "bangalore",
        "minExp": 7,
        "maxExp": 15,
        "jobRole": "backend",
        "companyName": "Tyrell Corporation",
        "logoUrl": "https://logo.clearbit.com/tencent.com",
        "mode": "Remote"
    },
    {
        "jdUid": "cfff3614-053c-11ef-83d3-06301d0a7178-92026",
        "jdLink": "https://weekday.works",
        "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        "maxJdSalary": 5,
        "minJdSalary": 3,
        "salaryCurrencyCode": "USD",
        "location": "remote",
        "minExp": 3,
        "maxExp": 12,
        "jobRole": "android",
        "companyName": "Strickland Propane",
        "logoUrl": "https://logo.clearbit.com/apple.com",
        "mode": "Hybrid"
    },
    {
        "jdUid": "cfff3621-053c-11ef-83d3-06301d0a7178-92028",
        "jdLink": "https://weekday.works",
        "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        "maxJdSalary": 33,
        "minJdSalary": 23,
        "salaryCurrencyCode": "USD",
        "location": "chennai",
        "minExp": 1,
        "maxExp": 5,
        "jobRole": "tech lead",
        "companyName": "LexCorp",
        "logoUrl": "https://logo.clearbit.com/asus.com",
        "mode": "Hybrid"
    }
] 

  return (
    <>
     <p>Weekday App</p>
     <Navbar data={jobDataList} setFilteredData={filteredData}/>
     <JobCardList data={filteredData}/>
     {loading && <Loading />}
    </>
  )
}

export default App;
