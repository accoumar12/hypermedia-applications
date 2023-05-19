
export default async (models) => {
    
    const dogModel = [
        {
            name: "Anastasia Petrova",
            role: "General Manager",
            image: "https://images.generated.photos/o2s8ngYVqmlVHuvqaAKIBM2OHzeFU0T-ZsFPedVW0Ks/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTE1MjgwLmpwZw.jpg",
            supervisor: "false",
            team: "Management Team",
            description: 'Anastasia Petrova is an accomplished technology manager with a wealth of experience in the venture capital industry. She is responsible for overseeing a diverse portfolio of technology startups, working closely with founders and management teams to help them navigate the challenges of scaling their businesses. Anastasia is widely respected in the industry for her expertise in identifying emerging trends and disruptive technologies, and for her ability to connect innovative startups with the resources they need to succeed.',
            description2: 'In addition to her work in venture capital, Anastasia is a passionate advocate for diversity and inclusion in the tech industry. She is committed to supporting underrepresented founders and promoting greater equity in funding and entrepreneurship. Her dedication to creating a more inclusive and equitable tech ecosystem has earned her widespread recognition and respect within the industry.',
            area: 'Technology',
            award1: "Outstanding Team Player Award",
            award2: "Excellence in Leadership Award",
            award3: "Innovator of the Year Award",
            award4: "Customer Service Champion Award"
        },
        {
            name: "Hiroshi Nakamura",
            role: "Marketing Manager",
            image: "https://images.generated.photos/qdLD50WNxBPnVwgGiRsEHQU1VC2pVyPA2-VS-ZPRSVQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzYwNDY2LmpwZw.jpg",
            supervisor: "false",
            team: "Management Team",
            description: "Hiroshi Nakamura is an experienced marketing professional with a proven track record in the venture capital industry. As Marketing Manager of the Management Team, he oversees the development and execution of marketing strategies for a diverse portfolio of companies, working closely with founders and management teams to help them achieve their business goals. Hiroshi is widely recognized for his ability to identify emerging trends and disruptive technologies, and for his skill in crafting compelling narratives that resonate with investors, customers, and stakeholders.",
            description2: 'His strategic vision and creative approach to marketing have helped his clients to successfully launch new products and services, expand into new markets, and achieve significant growth and market share. With his combination of marketing expertise, industry knowledge, and business acumen, Hiroshi is a valuable asset to any organization he serves.',
            area: 'Healthcare',
            award1: "Outstanding Team Player Award",
            award2: "Excellence in Leadership Award",
            award3: "Innovator of the Year Award",
            award4: "Customer Service Champion Award"
        },
        {
            name: "Javier Rodriguez",
            role: "Associate",
            image: "https://images.generated.photos/2D-ZKeoiXPPGKyvaymCUpul7jU34JkdmmBa1Qp9NWio/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDc1NzI1LmpwZw.jpg",
            supervisor: "false",
            team: "Investment Team",
            description: "Javier Rodriguez is a highly experienced Associate on the Investment Team. With a deep understanding of the venture capital industry, he is able to evaluate investment opportunities and identify promising startups across a variety of sectors. Javier is known for his strategic thinking, his analytical skills, and his ability to identify emerging trends and technologies. Javier is a valuable asset to his team, and his expertise has been critical in supporting the growth of several high-potential startups.",
            description2: 'His strong communication skills, collaborative approach, and attention to detail have enabled him to build lasting relationships with founders and management teams, and to provide valuable guidance and support as they navigate the challenges of scaling their businesses. With his proven track record of success and his commitment to creating long-term value, Javier is a key member of the Investment Team.',
            area: 'Consumer Goods',
            award1: "Outstanding Team Player Award",
            award2: "Excellence in Leadership Award",
            award3: "Innovator of the Year Award",
            award4: "Customer Service Champion Award"
        },
        {
            name: "Emilia Costa",
            role: "Managing Partner",
            image: "https://images.generated.photos/cyB4QZUFezafBKyDY68Rk7HZYNzwsx9S-5kAKdYMdHw/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDk2MzIwLmpwZw.jpg",
            supervisor: "false",
            team: "Investment Team",
            description: "Emilia Costa is a highly experienced managing partner with a proven track record of success in the venture capital industry. As the leader of the Investment Team, she oversees a portfolio of high-growth technology startups and works closely with founders and management teams to help them achieve their business goals.",
            description2: 'In addition to her work in venture capital, Emilia is a dedicated advocate for social impact and sustainability. She believes that business can be a powerful force for positive change and is committed to supporting innovative companies that are working to create a more just and equitable world. Her passion for social impact has earned her widespread recognition and respect in the industry, and she is widely regarded as a thought leader in the field. With her combination of strategic thinking, operational expertise, and commitment to social responsibility, Emilia is a valuable asset to any organization she serves.',
            area: "Healthcare",
            award1: "Outstanding Team Player Award",
            award2: "Excellence in Leadership Award",
            award3: "Innovator of the Year Award",
            award4: "Customer Service Champion Award"
        },
        {
            name: "Isabella Rossi",
            role: "Advisoring Manager",
            image: "https://images.generated.photos/pnRnY8yXjjor5i9bA11bnNnf6LNUA_dluUNQnAPKOow/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTYwODc4LmpwZw.jpg",
            supervisor: "false",
            team: "Advisoring Board Team",
            description: "Isabella Rossi is a seasoned Advisoring Manager at our venture capital company. With over a decade of experience in the industry, she has played a vital role in the growth and success of numerous startups. Her expertise lies in advising and strategizing with entrepreneurs to help them overcome challenges and make informed decisions.",
            description2: "Isabella's passion for entrepreneurship and her extensive network make her a valuable asset to our Advisoring Board Team. As an Advisoring Manager, Isabella takes a collaborative and personalized approach to work closely with startups. With her extensive experience in the industry, Isabella has a keen eye for identifying potential roadblocks and works with entrepreneurs to overcome them and stay on track. With her wealth of knowledge and experience, Isabella is a trusted advisor to many startups, and her contributions have been instrumental in their success.",
            area: 'Consumer Goods',
            award1: "Outstanding Team Player Award",
            award2: "Excellence in Leadership Award",
            award3: "Innovator of the Year Award",
            award4: "Customer Service Champion Award"
        },
        {
            name: "Maya Patel",
            role: "Marketing Manager",
            image: "https://images.generated.photos/ICdteXo2TklxncJ0AXFcb4pbqUU09fI1hF8aBUyrkVI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjkwMjgyLmpwZw.jpg",
            supervisor: "false",
            team: "Management Team",
            description: "Maya Patel is a Marketing Manager with extensive experience in the venture capital industry. She has a strong background in marketing, branding, and business development. Maya is responsible for creating and implementing marketing strategies that help the firm attract and retain investors. She is an expert in using various digital marketing channels to drive awareness and engagement, and is always looking for new and innovative ways to promote the firm.",
            description2: "Maya is a collaborative team player and works closely with other members of the management team to ensure that the firm's marketing efforts are aligned with its overall business objectives. With her strategic vision and leadership skills, Maya is an invaluable asset to the firm.",
            area: 'Consumer Goods',
            award1: "Outstanding Team Player Award",
            award2: "Excellence in Leadership Award",
            award3: "Innovator of the Year Award",
            award4: "Customer Service Champion Award"
        },
        {
            name: "Juan Garcia",
            role: "Operations Manager",
            image: "https://images.generated.photos/uJWbQx2qeCN1wRTiAb4kMnmx1MiVE9hwGGiGceNZPHo/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjYxMzI4LmpwZw.jpg",
            supervisor: "false",
            team: "Operations and Finance Team",
            description: "Juan Garcia is the Operations Manager at our venture capital company, responsible for overseeing the day-to-day operations of our business. With over 10 years of experience in operations and finance, Juan brings a wealth of knowledge and expertise to our team. He has a proven track record of streamlining processes, optimizing performance, and maximizing profitability.",
            description2: "Juan is known for his attention to detail, his analytical skills, and his ability to solve complex problems in a timely and effective manner. In his role as Operations Manager, Juan works closely with other members of our team to ensure that all aspects of our business are running smoothly. He oversees our finance and accounting functions, manages vendor relationships, and works to optimize our processes and procedures. Juan is a dedicated and hardworking member of our team who is always looking for ways to improve our operations and better serve our clients.",
            area: "Healthcare",
            award1: "Outstanding Team Player Award",
            award2: "Excellence in Leadership Award",
            award3: "Innovator of the Year Award",
            award4: "Customer Service Champion Award"
        },
        {
            name: "Aisha Khan",
            role: "Investment Partner",
            image: "https://images.generated.photos/RiBisg3NjFkV_rWyb8pISfGa6G_23il2-WatcsILCws/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjcwNTA4LmpwZw.jpg",
            supervisor: "false",
            team: "Investment Team",
            description: "Aisha Khan is an Investment Partner on the Investment Team at our company. She brings years of experience in the finance industry and is responsible for leading the team's investment strategy and decision-making processes. Her expertise lies in identifying and evaluating investment opportunities that align with the company's mission and values. Aisha is an integral part of the team and works closely with other members to ensure that the team is meeting its goals and objectives.",
            description2: "Aisha's dedication and hard work have made a significant impact on the Investment Team's success and growth. As an Investment Partner, Aisha is constantly keeping up-to-date with the latest market trends and developments. She is also responsible for building and maintaining relationships with external stakeholders, including investors, fund managers, and industry experts.",
            area: "Sustainability",
            award1: "Outstanding Team Player Award",
            award2: "Excellence in Leadership Award",
            award3: "Innovator of the Year Award",
            award4: "Customer Service Champion Award"
        },
        {
            name: "Kofi Mensah",
            role: "Analyst",
            image: "https://images.generated.photos/dIyJWRLfsX-V0m02fHxliP0rKbXdDanizxCu92SMbFg/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzcwMTM3LmpwZw.jpg",
            supervisor: "false",
            team: "Operations and Finance Team",
            description: "Kofi Mensah is an Analyst at our company and a valuable member of the Operations & Finance Team. Kofi's responsibilities include analyzing financial data, identifying trends, and generating reports that are used to inform decision-making processes. Kofi's attention to detail and ability to work with large datasets have been instrumental in the success of the team's projects.",
            description2: "Before joining our company, Kofi worked as a financial analyst for several years, gaining experience in the financial services industry. His background in finance has proven to be an asset to the team, as he is able to bring a unique perspective to projects and collaborate with other departments effectively. Kofi works well with others and is always willing to lend a helping hand. Kofi's positive attitude and strong work ethic make him a pleasure to work with, and we are lucky to have him on our team.",
            area: 'Consumer Goods',
            award1: "Outstanding Team Player Award",
            award2: "Excellence in Leadership Award",
            award3: "Innovator of the Year Award",
            award4: "Customer Service Champion Award"
        },
        {
            name: "Omar Al-Farsi",
            role: "Managing Partner",
            image: "https://images.generated.photos/kGsAWkP8-SuFDEjVOnhTj1VqLDtv_exzolBxepiJyvs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDkyNTY3LmpwZw.jpg",
            supervisor: "false",
            team: "Management Team",
            description: "Omar Al-Farsi is a Managing Partner at our company, bringing a wealth of experience and expertise to our management team. With a strong background in business and finance, Omar is responsible for overseeing the strategic direction of the company and ensuring that all operations are running smoothly. He is committed to building and maintaining strong relationships with our clients and partners, and his passion for innovation and collaboration drives our team to deliver the best possible results.",
            description2: "Prior to joining our company, Omar held several leadership roles in the finance industry, where he developed a deep understanding of the markets and established a proven track record of success. Omar's leadership style is characterized by his collaborative approach, and he places a strong emphasis on teamwork, communication, and continuous improvement.",
            area: "Sustainability",
            award1: "Outstanding Team Player Award",
            award2: "Excellence in Leadership Award",
            award3: "Innovator of the Year Award",
            award4: "Customer Service Champion Award"
        },
        {
            name: "Leila Ahmed",
            role: "Operations Manager",
            image: "https://images.generated.photos/-5hL90kRQCOIJcoSfTE1jg5HXqgkJsR5m6LpvV-3tnY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjAwNzM0LmpwZw.jpg",
            supervisor: "false",
            team: "Operations and Finance Team",
            description: "Leila Ahmed is the Operations Manager for the Operations & Finance Team. She is responsible for overseeing and managing the day-to-day operations of the team, ensuring that everything runs smoothly and efficiently. Leila brings a wealth of experience to her role, having worked in various operational roles in the past. With her excellent organizational skills and attention to detail, Leila ensures that all operational tasks are completed to a high standard, and that any issues are dealt with in a timely and effective manner. In her role as Operations Manager, Leila plays a critical role in driving the success of the organization.",
            description2: "Through her leadership, Leila has helped the team to become more efficient and effective, resulting in improved business outcomes. Leila is highly respected by her colleagues and is known for her dedication, hard work, and professionalism. She is a valuable member of the team and is committed to making a positive impact on the organization.",
            area: 'Technology',
            award1: "Outstanding Team Player Award",
            award2: "Excellence in Leadership Award",
            award3: "Innovator of the Year Award",
            award4: "Customer Service Champion Award"
        },
        {
            name: "Carlos Ramirez",
            role: "Analyst",
            image: "https://images.generated.photos/6t5NqQ71oTmoUTIE2OCotQ8rCf_ki8iESBXNSwj7ERk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDExNjIyLmpwZw.jpg",
            supervisor: "false",
            team: "Advisoring Board Team",
            description: "Carlos Ramirez is an Analyst on the Advisoring Board Team at our company. With his extensive experience in data analysis and market research, he plays a crucial role in providing insights and recommendations to our clients.",
            description2: "Carlos is a detail-oriented individual who is skilled at identifying patterns and trends in complex data sets, allowing him to provide valuable insights that help our clients make informed decisions. His excellent communication skills and ability to work under tight deadlines have made him a valuable asset to the team. Carlos is always looking for ways to improve processes and add value to the team, and his passion for his work is evident in everything he does. Outside of work, Carlos enjoys playing basketball and hiking in the mountains. He is also an avid reader and enjoys learning about new topics, particularly in the field of technology and innovation.",
            area: "Sustainability",
            award1: "Outstanding Team Player Award",
            award2: "Excellence in Leadership Award",
            award3: "Innovator of the Year Award",
            award4: "Customer Service Champion Award"
        },
        {
            name: "Niamh Murphy",
            role: "Managing Advisor",
            image: "https://images.generated.photos/ol8-PlI0aHrwYAddM0J_rJ5JpgnyrlohY8dm4iyEJM0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODYwMDIwLmpwZw.jpg",
            supervisor: "false",
            team: "Investment Team",
            description: "Niamh Murphy is a Managing Advisor who is a key member of the Management Team at the company. She plays a crucial role in providing guidance and direction to the organization's operations and strategic planning. Niamh's expertise in management and leadership allows her to oversee and optimize various processes, resulting in increased efficiency and productivity.As a Managing Advisor, Niamh also provides mentorship and support to other team members, helping to develop their skills and expertise.",
            description2: "Niamh's extensive experience in management and leadership roles in various industries has equipped her with a diverse skill set that allows her to adapt to changing circumstances and drive the organization towards success. She is committed to the company's values and mission and works tirelessly to ensure that these are reflected in all aspects of the organization's operations.",
            area: 'Consumer Goods',
            award1: "Outstanding Team Player Award",
            award2: "Excellence in Leadership Award",
            award3: "Innovator of the Year Award",
            award4: "Customer Service Champion Award"
        },
        {
            name: "Tariq Ali",
            role: "Operations Manager",
            image: "https://images.generated.photos/zRZHZZBmahRLRMvL9iYi-QH4oSE0aUJ-iczhWW3FJO8/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzkzMDI2LmpwZw.jpg",
            supervisor: "false",
            team: "Advisoring Board Team",
            description: "Tariq Ali is an Operations Manager at the company, currently based in the same location as the rest of the team. With several years of experience in managing operations in various industries, Tariq is a valuable member of the team. In his current role, he oversees the daily operations of the Advisoring Board Team, ensuring that everything runs smoothly and efficiently. As an Operations Manager, Tariq is responsible for ensuring that the team has the necessary resources to achieve its objectives. This includes managing budgets, schedules, and other resources. He works closely with other members of the team to identify areas for improvement and implement solutions that enhance the overall performance of the team.",
            description2: "In addition to his work as an Operations Manager, Tariq is also an active member of the Advisoring Board Team. He regularly participates in team meetings and provides valuable input on various matters.",
            area: 'Technology',
            award1: "Outstanding Team Player Award",
            award2: "Excellence in Leadership Award",
            award3: "Innovator of the Year Award",
            award4: "Customer Service Champion Award"
        },
        {
            name: "Sofia Hernandez",
            role: "General Advisor",
            image: "https://images.generated.photos/5670owP5xUWAc_jX38k01dgR4Bv02BqZZcE1xxfkdVU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mjc4MjkzLmpwZw.jpg",
            supervisor: "false",
            team: "Advisoring Board Team",
            description: "Sofia Hernandez is a General Advisor working as a part of the Advisoring Board Team at the company. In this role, Sofia is responsible for providing advice and guidance on various aspects of the company's operations, including strategy, finances, and business development. With her experience and expertise, Sofia helps the company navigate challenges and seize opportunities to grow and thrive.As a key member of the Advisoring Board Team, Sofia works closely with other advisors and executives to ensure that the company is on the right path to success.",
            description2: "Sofia brings a wealth of knowledge and experience to her role at the company. Prior to joining the team, she worked in a variety of roles in the business and financial sectors, developing a deep understanding of the industry and the challenges and opportunities it presents. Sofia is passionate about helping companies succeed and is committed to working collaboratively with others to achieve this goal.",
            area: "Sustainability",
            award1: "Outstanding Team Player Award",
            award2: "Excellence in Leadership Award",
            award3: "Innovator of the Year Award",
            award4: "Customer Service Champion Award"
        },
        {
            name: "Rajesh Singh",
            role: "Managing Partner",
            image: "https://images.generated.photos/19JlfeiSlISk0S4OdOfChzW99ghETYKXJyjY30GYWbk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzUxMzY3LmpwZw.jpg",
            supervisor: "false",
            team: "Management Team",
            description: "Rajesh Singh is a Managing Partner at our company, where he leads our Management Team. He is responsible for overseeing the overall strategy and direction of our company, as well as managing and mentoring our team of talented professionals.",
            description2: "Prior to joining our company, Rajesh held senior leadership positions at several other firms in the industry, where he gained extensive experience in business development, financial planning, and operations management. He is known for his ability to build strong relationships with clients and stakeholders, and his strategic vision and leadership have been instrumental in driving our company's growth and success. Rajesh holds an MBA from a top-tier business school, and he is a frequent speaker at industry conferences and events.",
            area: 'Healthcare',
            award1: "Outstanding Team Player Award",
            award2: "Excellence in Leadership Award",
            award3: "Innovator of the Year Award",
            award4: "Customer Service Champion Award"
        },
        {
            name: "Olivia Jones",
            role: "Analyst",
            image: "https://images.generated.photos/QlI_H6ImJ413_0BcIcbXe7sPVBlxMXg2X6lYmKbpjSk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDI4MTA0LmpwZw.jpg",
            supervisor: "false",
            team: "Operations and Finance Team",
            description: "Olivia Jones is an Analyst in the Operations & Finance Team. She is responsible for analyzing financial data, preparing reports and budgets, and identifying cost-saving opportunities. Olivia is known for her attention to detail, strong analytical skills, and ability to work effectively under pressure.",
            description2: "With a background in finance and accounting, Olivia brings a wealth of knowledge and experience to the team. Prior to joining the company, she worked for several large financial institutions, where she gained experience in financial analysis, risk management, and strategic planning. In her current role, Olivia enjoys working collaboratively with her colleagues to solve complex financial problems and drive the company's success. Outside of work, Olivia enjoys hiking, reading, and spending time with family and friends. She is also actively involved in several community organizations and volunteers her time to support causes related to education and social justice.",
            area: "Sustainability",
            award1: "Outstanding Team Player Award",
            award2: "Excellence in Leadership Award",
            award3: "Innovator of the Year Award",
            award4: "Customer Service Champion Award"
        },
        {
            name: "Amirah Abdullahi",
            role: "Former Executive",
            image: "https://images.generated.photos/AUaKbR5yLe1cyGBKOJ71-qDflmELAJBTGjGa5ZFmbKY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTM5NTM0LmpwZw.jpg",
            supervisor: "false",
            team: "Advisoring Board Team",
            description: "Amirah Abdullahi is a former executive who is a valued member of our Advising Board team. With her wealth of experience and expertise, she has provided invaluable insights and guidance to our team. Amirah's contributions have helped us make strategic decisions that have positively impacted our business. As a member of the Advising Board team, Amirah plays a key role in advising our senior leadership team on key business decisions.",
            description2: "Her experience in leadership, strategy, and operations has proven to be invaluable in shaping our approach to tackling complex business challenges. Despite her busy schedule, Amirah remains committed to sharing her knowledge and experience with the rest of our team. She regularly engages with our staff to share insights, provide guidance, and offer support whenever needed. Her dedication and commitment to our organization make her an invaluable member of our team.",
            area: 'Consumer Goods',
            award1: "Outstanding Team Player Award",
            award2: "Excellence in Leadership Award",
            award3: "Innovator of the Year Award",
            award4: "Customer Service Champion Award"
        },
        {
            name: "Lars Andersen",
            role: "Finance Director",
            image: "https://images.generated.photos/vnu9KzNx3sWXqL-ayVCXsCOsCtXiWpHEp5441eFcoe4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTE3MTQzLmpwZw.jpg",
            supervisor: "false",
            team: "Operations and Finance Team",
            description: "Lars Andersen is the Finance Director at our company and brings with him a wealth of knowledge and experience in financial management. He has been with the company for over a decade and has played an instrumental role in the growth and success of our organization. Lars is responsible for the financial health of the company and ensures that we operate within budget, meet our financial targets, and comply with all regulatory requirements. He oversees all financial operations, including budgeting, forecasting, and financial reporting. He has a deep understanding of financial analysis and is able to provide insightful recommendations to the management team.",
            description2: "One of Lars's key strengths is his ability to identify potential risks and opportunities in the financial markets. He is able to analyze economic trends and market conditions to determine the best course of action for the company. He is constantly seeking new ideas and innovative solutions to drive growth and profitability.",
            area: 'Healthcare',
            award1: "Outstanding Team Player Award",
            award2: "Excellence in Leadership Award",
            award3: "Innovator of the Year Award",
            award4: "Customer Service Champion Award"
        },
        {
            name: "Fatima Hassan",
            role: "Investment Partner",
            image: "https://images.generated.photos/wKcDWaIoC2bNfyvWDIY0uRcgjGdh6jWvJcsyp88KayU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mjg5OTIwLmpwZw.jpg",
            supervisor: "false",
            team: "Investment Team",
            description: "Fatima Hassan is an Investment Partner on our Investment Team. With years of experience in the industry, she has a keen eye for identifying promising investment opportunities and a strong track record of delivering results. Fatima is a strategic thinker who is able to identify and capitalize on emerging trends, and she has played a key role in driving the success of our investment portfolio. As an Investment Partner, Fatima is responsible for leading and executing investment deals, as well as managing portfolio companies.",
            description2: "Fatima is also actively involved in mentoring and training junior members of the team, helping to develop the next generation of investment professionals. Outside of work, Fatima is passionate about giving back to her community and is involved in several philanthropic initiatives. She is a graduate of a top business school and holds several certifications in finance and investment.",
            area: 'Technology',
            award1: "Outstanding Team Player Award",
            award2: "Excellence in Leadership Award",
            award3: "Innovator of the Year Award",
            award4: "Customer Service Champion Award"
        },
    ]
    await models.Dog.bulkCreate(dogModel)

    const companySup0 = await models.Company.create(dogModel[0])
    const companySup1 = await models.Company.create(dogModel[1])
    const companySup2 = await models.Company.create(dogModel[2])
    const companySup3 = await models.Company.create(dogModel[3])
    const companySup5 = await models.Company.create(dogModel[5])
    const companySup10 = await models.Company.create(dogModel[10])
    const companySup11 = await models.Company.create(dogModel[11])
    const companySup14 = await models.Company.create(dogModel[14])
    const CompanyModel = [
        {
            name: "UnitedHealth Group",
            areas: "Healthcare",
            companyId: companySup1.id,
            description: "UnitedHealth Group, Inc. engages in the provision of health care coverage, software, and data consultancy services. It operates through the following segments: UnitedHealthcare, OptumHealth, OptumInsight, and OptumRx. The UnitedHealthcare segment utilizes Optum's capabilities to help coordinate patient care, improve affordability of medical care, analyze cost trends, manage pharmacy benefits, work with care providers more effectively, and create a simpler consumer experience. The OptumHealth segment provides health and wellness care, serving the broad health care marketplace including payers, care providers, employers, government, life sciences companies, and consumers. The OptumInsight segment focuses on data and analytics, technology, and information to help major participants in the healthcare industry. The OptumRx segment offers pharmacy care services. The company was founded by Richard T. Burke in January 1977 and is headquartered in Minnetonka, MN.",
            link: "https://www.unitedhealthgroup.com/",
            ceo: "Sir Andrew Witty",
            image: "https://1000logos.net/wp-content/uploads/2018/02/United-Healthcare-Logo-640x343.png"
        },
        {
            name: "Cardinal Health",
            areas: "Healthcare",
            companyId: companySup1.id,
            description: "Cardinal Health, Inc. is a healthcare services and products company, which engages in the provision of customized solutions for hospitals, healthcare systems, pharmacies, ambulatory surgery centers, clinical laboratories, and physician offices. It also provides medical products and pharmaceuticals and cost-effective solutions that enhance supply chain efficiency. The firm operates through the Pharmaceutical and Medical segments. The Pharmaceutical segment distributes branded and generic pharmaceutical, specialty pharmaceutical and over-the-counter healthcare and consumer products. The Medical segment manufactures, sources and distributes Cardinal Health branded medical, surgical, and laboratory products. The company was founded by Robert D. Walter in 1971 and is headquartered in Dublin, OH.",
            link: "https://www.cardinalhealth.com/en.html",
            ceo: "Jason Hollar",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Cardinal_Health_Logo.svg/2560px-Cardinal_Health_Logo.svg.png"
        },
        {
            name: "Elevance Health, Inc.",
            areas: "Healthcare",
            companyId: companySup1.id,
            description: "Elevance Health, Inc. operates as a health company, which engages in improving lives and communities, and making healthcare simpler. It operates through the following segments: Commercial and Specialty Business, Government Business, CarelonRx, and Other. The Commercial and Specialty Business segment provides insurance products and services such as stop loss, dental, vision, life, disability and supplemental health insurance. The Government Business segment includes medicare and medicaid businesses, national government services, and services provided to the federal government. The CerelonRx segment offers formulary management, pharmacy networks, prescription drug database, member services, and mail order capabilities. The Other segment is involved in health services business focused on quality of healthcare by enabling and creating new care delivery and payment models. The company was founded in 1944 and is headquartered in Indianapolis, IN.",
            link: "https://www.elevancehealth.com/",
            ceo: "Gail Boudreaux",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Elevance_Health_logo.svg/1200px-Elevance_Health_logo.svg.png"
        },
        {
            name: "Cigna Group",
            areas: "Healthcare",
            companyId: companySup3.id,
            description: "The Cigna Group is engaged in the provision of global health services. It operates through the following segments: Evernorth, U.S. Medical, International Markets, and Group Disability and Other. The Evernorth segment includes a broad range of coordinated and point solution health services, including pharmacy solutions, benefits management solutions, care solutions and intelligence solutions. The U.S. Medical segment includes Cigna's U.S. Commercial and U.S. Government businesses that provide comprehensive medical and coordinated solutions to clients and customers. The International Markets segment includes supplemental health, life and accident insurance products and health care coverage in international markets, as well as health care benefits to globally mobile employees of multinational organizations. The Group Disability and Other segment represents group disability and life, corporate-owned life insurance, and run-off business consisting of reinsurance, settlement authority, and individual life insurance and annuity and retirement benefits business. The company was founded in 1792 and is headquartered in Bloomfield, CT.",
            link: "https://www.cigna.com/",
            ceo: "David Cordani",
            image: "https://1000logos.net/wp-content/uploads/2020/07/Cigna-Logo-640x360.png"
        },
        {
            name: "Pfizer Inc.",
            areas: "Healthcare",
            companyId: companySup3.id,
            description: "Pfizer Inc is a research-based global biopharmaceutical company. It engages in the discovery, development, manufacture, marketing, sales and distribution of biopharmaceutical products worldwide. The firm works across developed and emerging markets to advance wellness, prevention, treatments and cures that challenge the most feared diseases. The company was founded by Charles Pfizer Sr. and Charles Erhart in 1849 and is headquartered in New York, NY",
            link: "https://www.pfizer.it/",
            ceo: "Albert Bourla",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Pfizer.svg/1200px-Pfizer.svg.png"
        },
        {
            name: "Microsoft",
            areas: "Technology",
            companyId: companySup0.id,
            description: "Microsoft Corp engages in the development and support of software, services, devices, and solutions. It operates through the following business segments: Productivity and Business Processes; Intelligent Cloud; and More Personal Computing. The Productivity and Business Processes segment comprises products and services in the portfolio of productivity, communication, and information services of the company spanning a variety of devices and platform. The Intelligent Cloud segment refers to the public, private, and hybrid serve products and cloud services of the company which can power modern business. The More Personal Computing segment encompasses products and services geared towards the interests of end users, developers, and IT professionals across all devices. The firm also offers operating systems; cross-device productivity applications; server applications; business solution applications; desktop and server management tools; software development tools; video games; personal computers, tablets; gaming and entertainment consoles; other intelligent devices; and related accessories. The company was founded by Paul Gardner Allen and William Henry Gates III in 1975 and is headquartered in Redmond",
            link: "https://www.microsoft.com/it-it",
            ceo: "Satya Nadella",
            image: "https://www.pngplay.com/wp-content/uploads/1/Microsoft-Logo-Download-Free-PNG.png"
        },
        {
            name: "Dell Technologies, Inc",
            areas: "Technology",
            companyId: companySup0.id,
            description: "Dell Technologies, Inc. is a holding company, which engages in the provision of information technology hardware, software, and service solutions through its subsidiaries. It operates through the following segments: Infrastructure Solutions Group (ISG), Client Solutions Group (CSG), and VMware. The ISG segment includes servers, networking, and storage, as well as services and third-party software and peripherals that are closely tied to the sale of ISG hardware. The CSG segment consists of sales to commercial and consumer customers of desktops, thin client products, and notebooks. The VMware segment provides compute, cloud management, networking and security, storage and availability, and other end-user computing offerings. The company was founded by Michael Saul Dell in 1984 and is headquartered in Round Rock, TX.",
            link: "https://www.dell.com/it-it",
            ceo: "Michael Dell",
            image: "https://aeseurope.com/wp-content/uploads/2021/05/dell-technologies-vertical_logo.png"
        },
        {
            name: "Taiwan Semiconductor Manufacturing Co.",
            areas: "Technology",
            companyId: companySup0.id,
            description: "Taiwan Semiconductor Manufacturing Co., Ltd. engages in the manufacture and sale of integrated circuits and wafer semiconductor devices. Its chips are used in personal computers and peripheral products, information applications, wired and wireless communications systems products, and automotive and industrial equipment including consumer electronics such as digital video compact disc player, digital television, game consoles, and digital cameras. The company was founded by Chung Mou Chang on February 21, 1987 and is headquartered in Hsinchu, Taiwan.",
            link: "https://www.tsmc.com/english",
            ceo: "C. C. Wei",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Tsmc.svg/1200px-Tsmc.svg.png"
        },
        {
            name: "Intel Corporation",
            areas: "Technology",
            companyId: companySup10.id,
            description: "Intel Corporation engages in the design, manufacture, and sale of computer products and technologies. It delivers computer, networking, data storage, and communications platforms. The firm operates through the following segments: Client Computing Group (CCG), Data Center Group (DCG), Internet of Things Group (IOTG), Non-Volatile Memory Solutions Group (NSG), Programmable Solutions (PSG), and All Other. The CCG segment consists of platforms designed for notebooks, 2-in-1 systems, desktops, tablets, phones, wireless and wired connectivity products, and mobile communication components. The DCG segment includes workload-optimized platforms and related products designed for enterprise, cloud, and communication infrastructure market. The IOTG segment offers compute solutions for targeted verticals and embedded applications for the retail, manufacturing, health care, energy, automotive, and government market segments. The NSG segment constitutes of NAND flash memory products primarily used in solid-state drives. The PSG segment contains programmable semiconductors and related products for a broad range of markets, including communications, data center, industrial, military, and automotive. The All Other segment consists of results from other non-reportable segment and corporate-related charges. The company was founded by Robert Norton Noyce and Gordon Earle Moore on July 18, 1968 and is headquartered in Santa Clara, CA.",
            link: "https://www.intel.com/content/www/us/en/homepage.html",
            ceo: "Pat Gelsinger",
            image: "https://logos-world.net/wp-content/uploads/2021/09/Intel-Logo-2006-2020.png"
        },
        {
            name: "STMicroelectronics",
            areas: "Technology",
            companyId: companySup10.id,
            description: "STMicroelectronics is a global leader in the design, manufacturing, and sale of semiconductor devices. Their products are used in a wide range of applications including automotive and industrial equipment, consumer electronics, and wired and wireless communication systems. The company was founded in 1987 and is headquartered in Geneva, Switzerland. STMicroelectronics is committed to innovation, sustainability, and social responsibility, and is dedicated to providing their customers with high-quality products and services that meet their evolving needs. With a strong focus on research and development, STMicroelectronics is well-positioned to continue leading the way in the semiconductor industry for years to come.",
            link: "https://www.st.com/content/st_com/en.html",
            ceo: "Jean-Marc Chery",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ST_logo_2020_blue_V.svg/800px-ST_logo_2020_blue_V.svg.png"
        },
        {
            name: "Nestlè",
            areas: "Consumer Goods",
            companyId: companySup2.id,
            description: "Nestlé is a leading global food and beverage company, with a portfolio of well-known brands including Nescafé, KitKat, and Gerber. The company was founded in 1866 and is headquartered in Vevey, Switzerland. Nestlé's products are sold in over 190 countries and include coffee, water, pet food, and infant nutrition. The company is committed to sustainability, responsible sourcing, and improving the lives of farmers and communities where it operates. Nestlé has set ambitious goals to reduce its environmental impact and has pledged to achieve zero net greenhouse gas emissions by 2050. With a focus on innovation and meeting consumer needs, Nestlé is well-positioned to continue driving growth and delivering value to its stakeholders for years to come.",
            link: "https://www.nestle.it/",
            ceo: "Ulf Mark Schneider",
            image: "https://loghi-famosi.com/wp-content/uploads/2020/09/Nestle-Logo.png"
        },
        {
            name: "Unilever",
            areas: "Consumer Goods",
            companyId: companySup2.id,
            description: "Unilever is a leading global consumer goods company, with a portfolio of well-known brands including Dove, Lipton, and Ben & Jerry's. The company was founded in 1929 and is headquartered in London, UK. Unilever's products are sold in over 190 countries and include food, home care, and personal care products. The company is committed to sustainability, responsible sourcing, and improving the lives of people around the world. Unilever has set ambitious goals to reduce its environmental impact and has pledged to achieve net zero emissions from its products by 2039. With a focus on innovation and meeting the changing needs of consumers, Unilever is well-positioned to continue driving growth and delivering value to its stakeholders for years to come.",
            link: "https://www.unilever.com/",
            ceo: "Hein Schumacher",
            image: "https://upload.wikimedia.org/wikipedia/it/thumb/e/e4/Unilever.svg/640px-Unilever.svg.png"
        },
        {
            name: "Nike",
            areas: "Consumer Goods",
            companyId: companySup2.id,
            description: "Nike is a leading global athletic footwear and apparel company, headquartered in Beaverton, Oregon, USA. The company was founded in 1964 and is known for its innovative products, including the iconic Air Jordan line of sneakers. Nike's products are sold in over 190 countries and include footwear, apparel, and accessories for a variety of sports and activities. The company is committed to sustainability and has set ambitious goals to reduce its carbon footprint and waste. Nike is also focused on promoting diversity, inclusion, and social justice, and has taken steps to address issues such as worker rights and gender inequality in its supply chain. With a strong brand and a focus on innovation and sustainability, Nike is well-positioned to continue driving growth and delivering value to its stakeholders in the years to come.",
            link: "https://www.nike.com/it/",
            ceo: "John Donahoe",
            image: "https://parspng.com/wp-content/uploads/2022/10/nikepng.parspng.com_.png"
        },
        {
            name: "Asahi Group",
            areas: "Consumer Goods",
            companyId: companySup5.id,
            description: "Asahi Group is a leading global beverage and food company, headquartered in Tokyo, Japan. The company was founded in 1889 and is known for its high-quality beer, including the popular Asahi Super Dry brand. Asahi's products are sold in over 80 countries and include alcoholic and non-alcoholic beverages, as well as food products. The company is committed to sustainability and has set ambitious goals to reduce its greenhouse gas emissions and water usage. Asahi is also focused on promoting responsible drinking and has implemented initiatives to reduce harmful drinking behavior. With a strong brand and a focus on sustainability and responsible drinking, Asahi Group is well-positioned to continue driving growth and delivering value to its stakeholders in the years to come.",
            link: "https://www.asahigroup-holdings.com/en/",
            ceo: "Atsushi Katsuki",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Asahi_logo.svg/1200px-Asahi_logo.svg.png"
        },
        {
            name: "Kraft Heinz",
            areas: "Consumer Goods",
            companyId: companySup5.id,
            description: "Kraft Heinz is a global food and beverage company based in Chicago, Illinois, USA. The company was formed in 2015 through the merger of Kraft Foods Group and H.J. Heinz Company. Kraft Heinz is known for its iconic brands, including Kraft Macaroni & Cheese, Heinz Ketchup, and Oscar Mayer. The company's products are sold in over 40 countries and include a wide range of food and beverage categories, such as condiments, cheese, frozen meals, and snacks. Kraft Heinz is committed to sustainability and has set goals to reduce its environmental impact, including reducing greenhouse gas emissions and water usage. The company is also focused on promoting healthy eating habits and has implemented initiatives to improve the nutritional quality of its products. With a strong portfolio of brands and a commitment to sustainability and healthy eating, Kraft Heinz is well-positioned to drive growth and deliver value to its stakeholders in the years to come.",
            link: "https://www.kraftheinzcompany.com/",
            ceo: "Miguel Patricio",
            image: "https://www.pngmart.com/files/22/Heinz-Logo-PNG-Image.png"
        },
        {
            name: "General Electric Co.",
            areas: "Sustainability",
            companyId: companySup11.id,
            description: "General Electric Co. engages in the provision of commercial and military aircraft engines and systems, wind, and other renewable energy generation equipment and grid solutions, and gas, steam, nuclear, and other power generation equipment. It operates through the following segments: Aviation, Healthcare, Renewable Energy, and Power. The Aviation segment designs and produces commercial and military aircraft engines, integrated engine components, electric power and mechanical aircraft systems. The Healthcare segment provides essential healthcare technologies to developed and emerging markets and has expertise in medical imaging, digital solutions, patient monitoring and diagnostics, drug discovery and performance improvement solutions. The Renewable Energy segment’s portfolio of business units includes onshore and offshore wind, blade manufacturing, grid solutions, hydro, storage, hybrid renewables and digital services offerings. The Power segment serves power generation, industrial, government and other customers worldwide with products and services related to energy production. The company was founded by Thomas Alva Edison in 1878 and is headquartered in Boston, MA.",
            link: "https://www.ge.com/",
            ceo: "H. Lawrence Culp Jr.",
            image: "https://upload.wikimedia.org/wikipedia/it/thumb/c/ce/GElogo.svg/1200px-GElogo.svg.png"
        },
        {
            name: "Iberdrola SA",
            areas: "Sustainability",
            companyId: companySup11.id,
            description: "Iberdrola SA is a holding company, which engages in the generation, distribution, trading, and marketing of electricity. It operates through the following businesses: Networks, Liberalized, Renewables and Other Businesses. The Networks business engages in the transmission and distribution of energy businesses, as well as those of any other regulated nature, originating in Spain, the United Kingdom, the United States and Brazil. The Liberalized business includes wholesale and retail of electricity in Spain, Portugal, the United Kingdom, Mexico and Continental Europe. The Renewables business involves the generation of electricity from renewable energy sources worldwide. The Other Businesses segment consists of group's supply and gas storage up to the moment of sale and other non-energy businesses. The company was founded by Juan de Urrutia in 1901 and is headquartered in Bilbao, Spain",
            link: "https://www.iberdrola.it/",
            ceo: "Valerio Faccenda",
            image: "https://companieslogo.com/img/orig/IBE.MC_BIG-f3d4bf6c.png"
        },
        {
            name: "Canadian Solar, Inc.",
            areas: "Sustainability",
            companyId: companySup11.id,
            description: "Canadian Solar, Inc. engages in the manufacture of solar photovoltaic modules, provision of solar energy and battery storage solutions, and development of utility-scale solar and battery storage products. It operates through the CSI Solar and Global Energy segments. The CSI Solar segment designs, develops, and manufactures solar ingots, wafers, cells, modules, and other solar power and battery storage products. The Global Energy segment includes solar and battery storage project development and sale, asset management services for operational projects, sale of electricity, and investment in retained assets. The company was founded by Shawn Qu in October 2001 and is headquartered in Guelph, Canada.",
            link: "https://www.canadiansolar.com/",
            ceo: "Xiaohua Qu Ph.D.",
            image: "https://tandem-solar-systems.com/wp-content/uploads/2017/03/Canadian-Solar-logo.png"
        },
        {
            name: "JinkoSolar Holding Co",
            areas: "Sustainability",
            companyId: companySup14.id,
            description: "JinkoSolar Holding Co., Ltd. engages in the manufacture of solar modules. It distributes solar products and sells its solutions and services to a diversified international utility, commercial and residential customers. The company was founded by Xian De Li, Kang Ping Chen, and Xian Hua Li on August 3, 2007 and is headquartered in Shangrao, China.",
            link: "https://www.jinkosolar.com/en/",
            ceo: "Xiande Li",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Jinko_Solar_logo.svg/1200px-Jinko_Solar_logo.svg.png"
        },
        {
            name: "Enel X",
            areas: "Sustainability",
            companyId: companySup14.id,
            description: "Enel X is a global leader in energy solutions, providing innovative products and services to help customers optimize their energy usage and reduce their environmental impact. The company offers a range of solutions for businesses and individuals, including energy storage, electric vehicle charging, demand response programs, and energy management software. Enel X has a presence in more than 35 countries around the world and is committed to driving the transition to a sustainable energy future. The company was founded in 2017 as part of Enel Group, a multinational energy company headquartered in Rome, Italy.",
            link: "https://www.enelx.com/",
            ceo: "Francesco Venturini",
            image: "https://corporate.enelx.com/content/dam/global/media-hub/press-kit/logos-highres/Enel_X_Logo_Violet_RGB.png"
        },
    ]
    await models.Company.bulkCreate(CompanyModel)
}
