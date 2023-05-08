
export default async (models) => {
    const locationModel = [
        {
            name: "Dog Paradise",
            city: "Milan"
        },
        {
            name: "Dog City",
            city: "Rome"
        },
    ]
    const location0 = await models.Location.create(locationModel[0])
    const location1 = await models.Location.create(locationModel[1])
    
    const dogModel = [
        {
            name: "Anastasia Petrova",
            role: "General Manager",
            image: "https://images.generated.photos/o2s8ngYVqmlVHuvqaAKIBM2OHzeFU0T-ZsFPedVW0Ks/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTE1MjgwLmpwZw.jpg",
            supervisor: "false",
            team: "Management Team",
            description: 'Anastasia Petrova is an accomplished technology manager with a wealth of experience in the venture capital industry. She is responsible for overseeing a diverse portfolio of technology startups, working closely with founders and management teams to help them navigate the challenges of scaling their businesses. Anastasia is widely respected in the industry for her expertise in identifying emerging trends and disruptive technologies, and for her ability to connect innovative startups with the resources they need to succeed. Her analytical skills and deep knowledge of the technology landscape have enabled her to make smart investment decisions and to help guide companies through critical periods of growth.',
            description2: 'In addition to her work in venture capital, Anastasia is a passionate advocate for diversity and inclusion in the tech industry. She is committed to supporting underrepresented founders and promoting greater equity in funding and entrepreneurship. Her dedication to creating a more inclusive and equitable tech ecosystem has earned her widespread recognition and respect within the industry. Anastasia is known for her strong work ethic, her collaborative approach to problem-solving, and her ability to build lasting relationships with her colleagues and partners. She is a skilled communicator and a natural leader, and her insights and expertise are highly valued by her team and her clients alike. With her combination of strategic vision, operational excellence, and commitment to social impact, Anastasia is a valuable asset to any organization she serves.',
            area: 'Technology',
            locationId: location1.id,
            
        },
        {
            name: "Hiroshi Nakamura",
            role: "Marketing Manager",
            image: "https://images.generated.photos/qdLD50WNxBPnVwgGiRsEHQU1VC2pVyPA2-VS-ZPRSVQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzYwNDY2LmpwZw.jpg",
            supervisor: "false",
            team: "Management Team",
            description: "Hiroshi Nakamura is an experienced marketing professional with a proven track record in the venture capital industry. As Marketing Manager of the Management Team, he oversees the development and execution of marketing strategies for a diverse portfolio of companies, working closely with founders and management teams to help them achieve their business goals. Hiroshi is widely recognized for his ability to identify emerging trends and disruptive technologies, and for his skill in crafting compelling narratives that resonate with investors, customers, and stakeholders. His strategic vision and creative approach to marketing have helped his clients to successfully launch new products and services, expand into new markets, and achieve significant growth and market share. With his combination of marketing expertise, industry knowledge, and business acumen, Hiroshi is a valuable asset to any organization he serves.",
            locationId: location0.id,

            area: 'Healthcare',
        },
        {
            name: "Javier Rodriguez",
            role: "Associate",
            image: "https://images.generated.photos/2D-ZKeoiXPPGKyvaymCUpul7jU34JkdmmBa1Qp9NWio/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDc1NzI1LmpwZw.jpg",
            supervisor: "false",
            team: "Investment Team",
            description: "Javier Rodriguez is a highly experienced Associate on the Investment Team. With a deep understanding of the venture capital industry, he is able to evaluate investment opportunities and identify promising startups across a variety of sectors. Javier is known for his strategic thinking, his analytical skills, and his ability to identify emerging trends and technologies. Javier is a valuable asset to his team, and his expertise has been critical in supporting the growth of several high-potential startups. His strong communication skills, collaborative approach, and attention to detail have enabled him to build lasting relationships with founders and management teams, and to provide valuable guidance and support as they navigate the challenges of scaling their businesses. With his proven track record of success and his commitment to creating long-term value, Javier is a key member of the Investment Team.",
            locationId: location0.id,

            area: 'Consumer Goods',
        },
        {
            name: "Emilia Costa",
            role: "Managing Partner",
            image: "https://images.generated.photos/cyB4QZUFezafBKyDY68Rk7HZYNzwsx9S-5kAKdYMdHw/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDk2MzIwLmpwZw.jpg",
            supervisor: "false",
            team: "Investment Team",
            description: "Emilia Costa is a highly experienced managing partner with a proven track record of success in the venture capital industry. As the leader of the Investment Team, she oversees a portfolio of high-growth technology startups and works closely with founders and management teams to help them achieve their business goals. Emilia's deep knowledge of the technology landscape and her strategic vision have enabled her to make smart investment decisions and to guide companies through critical periods of growth. In addition to her work in venture capital, Emilia is a dedicated advocate for social impact and sustainability. She believes that business can be a powerful force for positive change and is committed to supporting innovative companies that are working to create a more just and equitable world. Her passion for social impact has earned her widespread recognition and respect in the industry, and she is widely regarded as a thought leader in the field. With her combination of strategic thinking, operational expertise, and commitment to social responsibility, Emilia is a valuable asset to any organization she serves.",
            locationId: location0.id,

            area: "Healthcare",
        },
        {
            name: "Isabella Rossi",
            role: "Advisoring Manager",
            image: "https://images.generated.photos/pnRnY8yXjjor5i9bA11bnNnf6LNUA_dluUNQnAPKOow/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTYwODc4LmpwZw.jpg",
            supervisor: "false",
            team: "Advisoring Board Team",
            description: "Isabella Rossi is a seasoned Advisoring Manager at our venture capital company. With over a decade of experience in the industry, she has played a vital role in the growth and success of numerous startups. Her expertise lies in advising and strategizing with entrepreneurs to help them overcome challenges and make informed decisions. Isabella's passion for entrepreneurship and her extensive network make her a valuable asset to our Advisoring Board Team. As an Advisoring Manager, Isabella takes a collaborative and personalized approach to work closely with startups. She understands that every company is unique and requires a tailored strategy to achieve success. With her extensive experience in the industry, Isabella is well-versed in identifying growth opportunities and developing action plans to achieve specific goals. She has a keen eye for identifying potential roadblocks and works with entrepreneurs to overcome them and stay on track. Isabella is a dynamic and forward-thinking leader who is always looking for ways to push the envelope and innovate. She is committed to staying ahead of the curve and keeping up with the latest industry trends and best practices. With her wealth of knowledge and experience, Isabella is a trusted advisor to many startups, and her contributions have been instrumental in their success.",
            locationId: location0.id,

            area: 'Consumer Goods',
        },
        {
            name: "Maya Patel",
            role: "Marketing Manager",
            image: "https://images.generated.photos/ICdteXo2TklxncJ0AXFcb4pbqUU09fI1hF8aBUyrkVI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjkwMjgyLmpwZw.jpg",
            supervisor: "false",
            team: "Management Team",
            description: "Maya Patel is a Marketing Manager with extensive experience in the venture capital industry. She has a strong background in marketing, branding, and business development. Maya is responsible for creating and implementing marketing strategies that help the firm attract and retain investors. She is an expert in using various digital marketing channels to drive awareness and engagement, and is always looking for new and innovative ways to promote the firm. Maya is a collaborative team player and works closely with other members of the management team to ensure that the firm's marketing efforts are aligned with its overall business objectives. With her strategic vision and leadership skills, Maya is an invaluable asset to the firm.",
            locationId: location0.id,

            area: 'Consumer Goods',

        },
        {
            name: "Juan Garcia",
            role: "Operations Manager",
            image: "https://images.generated.photos/uJWbQx2qeCN1wRTiAb4kMnmx1MiVE9hwGGiGceNZPHo/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjYxMzI4LmpwZw.jpg",
            supervisor: "false",
            team: "Operations and Finance Team",
            description: "Juan Garcia is the Operations Manager at our venture capital company, responsible for overseeing the day-to-day operations of our business. With over 10 years of experience in operations and finance, Juan brings a wealth of knowledge and expertise to our team. He has a proven track record of streamlining processes, optimizing performance, and maximizing profitability. Prior to joining our company, Juan worked at a leading financial institution where he was responsible for managing operations across multiple departments. During his tenure, he successfully implemented a number of key initiatives that resulted in significant cost savings and increased efficiency. Juan is known for his attention to detail, his analytical skills, and his ability to solve complex problems in a timely and effective manner.In his role as Operations Manager, Juan works closely with other members of our team to ensure that all aspects of our business are running smoothly. He oversees our finance and accounting functions, manages vendor relationships, and works to optimize our processes and procedures. Juan is a dedicated and hardworking member of our team who is always looking for ways to improve our operations and better serve our clients.",

            locationId: location1.id,

            area: "Healthcare"
        },
        {
            name: "Aisha Khan",
            role: "Investment Partner",
            image: "https://images.generated.photos/RiBisg3NjFkV_rWyb8pISfGa6G_23il2-WatcsILCws/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjcwNTA4LmpwZw.jpg",
            supervisor: "false",
            locationId: location0.id,
            team: "Investment Team",
            description: "Aisha Khan is an Investment Partner on the Investment Team at our company. She brings years of experience in the finance industry and is responsible for leading the team's investment strategy and decision-making processes. Her expertise lies in identifying and evaluating investment opportunities that align with the company's mission and values. Aisha is an integral part of the team and works closely with other members to ensure that the team is meeting its goals and objectives. Aisha is a dynamic and driven individual with a passion for innovation and growth. Her leadership style is collaborative and encourages open communication and idea-sharing. She is committed to creating a supportive and inclusive work environment that fosters creativity and collaboration among team members. Aisha's dedication and hard work have made a significant impact on the Investment Team's success and growth. As an Investment Partner, Aisha is constantly keeping up-to-date with the latest market trends and developments. She is responsible for conducting market research and analysis to identify new investment opportunities and to monitor the performance of existing investments. Aisha is also responsible for building and maintaining relationships with external stakeholders, including investors, fund managers, and industry experts.",
            
            area: "Sustainability",
        },
        {
            name: "Kofi Mensah",
            role: "Analyst",
            image: "https://images.generated.photos/dIyJWRLfsX-V0m02fHxliP0rKbXdDanizxCu92SMbFg/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzcwMTM3LmpwZw.jpg",
            supervisor: "false",
            team: "Operations and Finance Team",
            description: "Kofi Mensah is an Analyst at our company and a valuable member of the Operations & Finance Team. Kofi's responsibilities include analyzing financial data, identifying trends, and generating reports that are used to inform decision-making processes. Kofi's attention to detail and ability to work with large datasets have been instrumental in the success of the team's projects.Before joining our company, Kofi worked as a financial analyst for several years, gaining experience in the financial services industry. His background in finance has proven to be an asset to the team, as he is able to bring a unique perspective to projects and collaborate with other departments effectively. Kofi's ability to think critically and creatively has also allowed him to develop innovative solutions to complex problems. In addition to his analytical skills, Kofi is also an excellent communicator and a team player. He works well with others and is always willing to lend a helping hand. Kofi's positive attitude and strong work ethic make him a pleasure to work with, and we are lucky to have him on our team.",
            locationId: location0.id,

            area: 'Consumer Goods',
        },
        {
            name: "Omar Al-Farsi",
            role: "Managing Partner",
            image: "https://images.generated.photos/kGsAWkP8-SuFDEjVOnhTj1VqLDtv_exzolBxepiJyvs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDkyNTY3LmpwZw.jpg",
            supervisor: "false",
            team: "Management Team",
            description: "Omar Al-Farsi is a Managing Partner at our company, bringing a wealth of experience and expertise to our management team. With a strong background in business and finance, Omar is responsible for overseeing the strategic direction of the company and ensuring that all operations are running smoothly. He is committed to building and maintaining strong relationships with our clients and partners, and his passion for innovation and collaboration drives our team to deliver the best possible results.Prior to joining our company, Omar held several leadership roles in the finance industry, where he developed a deep understanding of the markets and established a proven track record of success. He is known for his ability to identify new opportunities and develop innovative strategies that drive growth and profitability. Omar's leadership style is characterized by his collaborative approach, and he places a strong emphasis on teamwork, communication, and continuous improvement.Outside of work, Omar is actively involved in several community organizations and is passionate about giving back to the community. He is a frequent speaker at industry events and conferences, where he shares his insights and experiences with other professionals in the field. We are proud to have Omar as a member of our team and look forward to his continued contributions to our company's success.",
            locationId: location1.id,

            area: "Sustainability"
        },
        {
            name: "Leila Ahmed",
            role: "Operations Manager",
            image: "https://images.generated.photos/-5hL90kRQCOIJcoSfTE1jg5HXqgkJsR5m6LpvV-3tnY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjAwNzM0LmpwZw.jpg",
            supervisor: "false",
            team: "Operations and Finance Team",
            description: "Leila Ahmed is the Operations Manager for the Operations & Finance Team. She is responsible for overseeing and managing the day-to-day operations of the team, ensuring that everything runs smoothly and efficiently. Leila brings a wealth of experience to her role, having worked in various operational roles in the past. With her excellent organizational skills and attention to detail, Leila ensures that all operational tasks are completed to a high standard, and that any issues are dealt with in a timely and effective manner. She is highly skilled in analyzing complex data and creating strategies to improve operational efficiency. Leila is also a great communicator and team player, able to work effectively with others and build strong relationships with colleagues and clients. In her role as Operations Manager, Leila plays a critical role in driving the success of the organization. She ensures that the Operations & Finance Team is meeting its goals and objectives, and that it is aligned with the organization's overall strategy. Through her leadership, Leila has helped the team to become more efficient and effective, resulting in improved business outcomes. Leila is highly respected by her colleagues and is known for her dedication, hard work, and professionalism. She is a valuable member of the team and is committed to making a positive impact on the organization.",
            locationId: location0.id,

            
            area: 'Technology',
        },
        {
            name: "Carlos Ramirez",
            role: "Analyst",
            image: "https://images.generated.photos/6t5NqQ71oTmoUTIE2OCotQ8rCf_ki8iESBXNSwj7ERk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDExNjIyLmpwZw.jpg",
            supervisor: "false",
            team: "Advisoring Board Team",
            description: "Carlos Ramirez is an Analyst on the Advisoring Board Team at our company. With his extensive experience in data analysis and market research, he plays a crucial role in providing insights and recommendations to our clients. Carlos is a detail-oriented individual who is skilled at identifying patterns and trends in complex data sets, allowing him to provide valuable insights that help our clients make informed decisions. In addition to his analytical skills, Carlos is a great team player who actively collaborates with his colleagues to deliver high-quality work. His excellent communication skills and ability to work under tight deadlines have made him a valuable asset to the team. Carlos is always looking for ways to improve processes and add value to the team, and his passion for his work is evident in everything he does. Outside of work, Carlos enjoys playing basketball and hiking in the mountains. He is also an avid reader and enjoys learning about new topics, particularly in the field of technology and innovation.",
            locationId: location0.id,

            area: "Sustainability"
        },
        {
            name: "Niamh Murphy",
            role: "Managing Advisor",
            image: "https://images.generated.photos/ol8-PlI0aHrwYAddM0J_rJ5JpgnyrlohY8dm4iyEJM0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODYwMDIwLmpwZw.jpg",
            supervisor: "false",
            team: "Investment Team",
            description: "Niamh Murphy is a Managing Advisor who is a key member of the Management Team at the company. She plays a crucial role in providing guidance and direction to the organization's operations and strategic planning. Niamh's expertise in management and leadership allows her to oversee and optimize various processes, resulting in increased efficiency and productivity.As a Managing Advisor, Niamh also provides mentorship and support to other team members, helping to develop their skills and expertise. She is a strong communicator and works closely with other departments and teams to ensure effective collaboration and coordination. Niamh's analytical and problem-solving skills make her an asset to the organization, as she is able to identify and address any challenges that may arise. Niamh's extensive experience in management and leadership roles in various industries has equipped her with a diverse skill set that allows her to adapt to changing circumstances and drive the organization towards success. She is committed to the company's values and mission and works tirelessly to ensure that these are reflected in all aspects of the organization's operations.",

            locationId: location0.id,
            area: 'Consumer Goods',
        },
        {
            name: "Tariq Ali",
            role: "Operations Manager",
            image: "https://images.generated.photos/zRZHZZBmahRLRMvL9iYi-QH4oSE0aUJ-iczhWW3FJO8/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzkzMDI2LmpwZw.jpg",
            supervisor: "false",
            team: "Advisoring Board Team",
            description: "Tariq Ali is an Operations Manager at the company, currently based in the same location as the rest of the team. With several years of experience in managing operations in various industries, Tariq is a valuable member of the team. In his current role, he oversees the daily operations of the Advisoring Board Team, ensuring that everything runs smoothly and efficiently. As an Operations Manager, Tariq is responsible for ensuring that the team has the necessary resources to achieve its objectives. This includes managing budgets, schedules, and other resources. He works closely with other members of the team to identify areas for improvement and implement solutions that enhance the overall performance of the team. Tariq is a highly motivated and detail-oriented professional who is committed to achieving the goals of the team. He is adept at identifying potential roadblocks and developing strategies to overcome them. His excellent communication and leadership skills make him an effective team player and a reliable asset to the company. In addition to his work as an Operations Manager, Tariq is also an active member of the Advisoring Board Team. He regularly participates in team meetings and provides valuable input on various matters. ",
            locationId: location0.id,

            area: 'Technology',
        },
        {
            name: "Sofia Hernandez",
            role: "General Advisor",
            image: "https://images.generated.photos/5670owP5xUWAc_jX38k01dgR4Bv02BqZZcE1xxfkdVU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mjc4MjkzLmpwZw.jpg",
            supervisor: "false",
            team: "Advisoring Board Team",
            description: "Sofia Hernandez is a General Advisor working as a part of the Advisoring Board Team at the company. In this role, Sofia is responsible for providing advice and guidance on various aspects of the company's operations, including strategy, finances, and business development. With her experience and expertise, Sofia helps the company navigate challenges and seize opportunities to grow and thrive.As a key member of the Advisoring Board Team, Sofia works closely with other advisors and executives to ensure that the company is on the right path to success. She participates in meetings and discussions, shares insights and recommendations, and collaborates with others to develop and implement strategies that will enable the company to achieve its goals. Sofia is also involved in building and maintaining relationships with clients, partners, and other stakeholders, helping to ensure that the company is meeting their needs and expectations. Sofia brings a wealth of knowledge and experience to her role at the company. Prior to joining the team, she worked in a variety of roles in the business and financial sectors, developing a deep understanding of the industry and the challenges and opportunities it presents. Sofia is passionate about helping companies succeed and is committed to working collaboratively with others to achieve this goal.",
            locationId: location0.id,
            area: "Sustainability"

        },
        {
            name: "Rajesh Singh",
            role: "Managing Partner",
            image: "https://images.generated.photos/19JlfeiSlISk0S4OdOfChzW99ghETYKXJyjY30GYWbk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzUxMzY3LmpwZw.jpg",
            supervisor: "false",
            team: "Management Team",
            description: "Rajesh Singh is a Managing Partner at our company, where he leads our Management Team. With many years of experience in leadership and management roles, Rajesh brings a wealth of knowledge and expertise to our organization. He is responsible for overseeing the overall strategy and direction of our company, as well as managing and mentoring our team of talented professionals. Prior to joining our company, Rajesh held senior leadership positions at several other firms in the industry, where he gained extensive experience in business development, financial planning, and operations management. He is known for his ability to build strong relationships with clients and stakeholders, and his strategic vision and leadership have been instrumental in driving our company's growth and success. Rajesh holds an MBA from a top-tier business school, and he is a frequent speaker at industry conferences and events. When he's not working, he enjoys spending time with his family and pursuing his passion for photography. We're proud to have Rajesh on our team and look forward to his continued contributions to our organization.",
            locationId: location0.id,

            
            area: 'Healthcare',
        },
        {
            name: "Olivia Jones",
            role: "Analyst",
            image: "https://images.generated.photos/QlI_H6ImJ413_0BcIcbXe7sPVBlxMXg2X6lYmKbpjSk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDI4MTA0LmpwZw.jpg",
            supervisor: "false",
            team: "Operations and Finance Team",
            description: "Olivia Jones is an Analyst in the Operations & Finance Team. She is responsible for analyzing financial data, preparing reports and budgets, and identifying cost-saving opportunities. Olivia is known for her attention to detail, strong analytical skills, and ability to work effectively under pressure. With a background in finance and accounting, Olivia brings a wealth of knowledge and experience to the team. Prior to joining the company, she worked for several large financial institutions, where she gained experience in financial analysis, risk management, and strategic planning. In her current role, Olivia enjoys working collaboratively with her colleagues to solve complex financial problems and drive the company's success. Outside of work, Olivia enjoys hiking, reading, and spending time with family and friends. She is also actively involved in several community organizations and volunteers her time to support causes related to education and social justice.",
            locationId: location0.id,

            area: "Sustainability"
        },
        {
            name: "Amirah Abdullahi",
            role: "Former Executive",
            image: "https://images.generated.photos/AUaKbR5yLe1cyGBKOJ71-qDflmELAJBTGjGa5ZFmbKY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTM5NTM0LmpwZw.jpg",
            supervisor: "false",
            team: "Advisoring Board Team",
            description: "Amirah Abdullahi is a former executive who is a valued member of our Advising Board team. With her wealth of experience and expertise, she has provided invaluable insights and guidance to our team. Amirah's contributions have helped us make strategic decisions that have positively impacted our business. As a member of the Advising Board team, Amirah plays a key role in advising our senior leadership team on key business decisions. She brings a unique perspective to the table, having worked in various industries and faced different challenges throughout her career. Her experience in leadership, strategy, and operations has proven to be invaluable in shaping our approach to tackling complex business challenges. Despite her busy schedule, Amirah remains committed to sharing her knowledge and experience with the rest of our team. She regularly engages with our staff to share insights, provide guidance, and offer support whenever needed. Her dedication and commitment to our organization make her an invaluable member of our team.",
            locationId: location0.id,

            area: 'Consumer Goods',
        },
        {
            name: "Lars Andersen",
            role: "Finance Director",
            image: "https://images.generated.photos/vnu9KzNx3sWXqL-ayVCXsCOsCtXiWpHEp5441eFcoe4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTE3MTQzLmpwZw.jpg",
            supervisor: "false",
            team: "Operations and Finance Team",
            description: "Lars Andersen is the Finance Director at our company and brings with him a wealth of knowledge and experience in financial management. He has been with the company for over a decade and has played an instrumental role in the growth and success of our organization. Lars is responsible for the financial health of the company and ensures that we operate within budget, meet our financial targets, and comply with all regulatory requirements. He oversees all financial operations, including budgeting, forecasting, and financial reporting. Lars is a highly skilled financial professional who has a passion for excellence. He has a deep understanding of financial analysis and is able to provide insightful recommendations to the management team. He is highly respected by his colleagues for his attention to detail and his ability to think strategically. Lars is a natural leader who is able to motivate his team to achieve their goals and deliver results. He is an excellent communicator who is able to explain complex financial information in a clear and concise manner. One of Lars's key strengths is his ability to identify potential risks and opportunities in the financial markets. He is able to analyze economic trends and market conditions to determine the best course of action for the company. Lars has a keen eye for detail and is always looking for ways to improve financial performance. He is constantly seeking new ideas and innovative solutions to drive growth and profitability.",
            locationId: location0.id,

            area: 'Healthcare',
        },
        {
            name: "Fatima Hassan",
            role: "Investment Partner",
            image: "https://images.generated.photos/wKcDWaIoC2bNfyvWDIY0uRcgjGdh6jWvJcsyp88KayU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mjg5OTIwLmpwZw.jpg",
            supervisor: "false",
            team: "Investment Team",
            locationId: location0.id,

            description: "Fatima Hassan is an Investment Partner on our Investment Team. With years of experience in the industry, she has a keen eye for identifying promising investment opportunities and a strong track record of delivering results. Fatima is a strategic thinker who is able to identify and capitalize on emerging trends, and she has played a key role in driving the success of our investment portfolio. As an Investment Partner, Fatima is responsible for leading and executing investment deals, as well as managing portfolio companies. She works closely with the rest of the Investment Team to identify new opportunities, conduct due diligence, and negotiate deals. Fatima is also actively involved in mentoring and training junior members of the team, helping to develop the next generation of investment professionals. Outside of work, Fatima is passionate about giving back to her community and is involved in several philanthropic initiatives. She is a graduate of a top business school and holds several certifications in finance and investment.",
            area: 'Technology',
        },
    ]
    await models.Dog.bulkCreate(dogModel)

    const supervisor0 = await models.Dog.create(dogModel[0])
    const supervisor1 = await models.Dog.create(dogModel[1])
    const supervisorModel = [
        {
            name: "Dog Paradise",
            areas: "Milan",
            supervisorId: supervisor0.id,
        },
        {
            name: "Dog City",
            areas: "Rome",
            supervisorId: supervisor1.id,
        },
    ]

    
    


    await models.Dog.bulkCreate(supervisorModel)
}
