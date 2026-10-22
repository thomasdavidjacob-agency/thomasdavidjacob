import type { BlogPost } from '../blog'

export const tradesPart2: BlogPost[] = [
  {
    slug: 'ai-scheduling-dispatch-small-trade-shops',
    title: 'AI Scheduling and Dispatch for Small Trade Shops: What\'s Real Today',
    metaTitle: 'AI Scheduling and Dispatch for Trade Shops | Oregon',
    metaDescription:
      'AI scheduling and dispatch for small trade shops: what field-service software and AI layers really do today, and where a dispatcher\'s judgment still wins.',
    date: 'October 24, 2026',
    publishDate: '2026-10-24',
    author: 'Winston',
    authorTitle: 'Head of AI Field Strategy',
    series: 'trades',
    excerpt:
      'Booking windows, route grouping, and on-my-way texts are real and useful. Fully automatic dispatch for a three-truck shop is mostly a sales pitch. Here is where the line sits.',
    heroImage: '/images/blog/trades/ai-scheduling-dispatch-small-trade-shops.webp',
    content: (
      <>
        <p>
          If you run a small plumbing, electrical, or HVAC shop, you have probably heard that AI scheduling and dispatch will &quot;run your calendar for you.&quot; Some of that is real. Some of it is a pitch aimed at companies with forty trucks, not three. This post sorts out what works today for a small trade shop, what still needs a person, and how to add AI without breaking the thing that keeps your jobs on time.
        </p>
        <p>
          This is part of our series on how trades businesses use AI. If you are new to it, start with the <a href="/blog/ai-for-plumbers-electricians-hvac-guide">practical AI guide for plumbers, electricians, and HVAC companies</a>.
        </p>

        <h2>What Does AI Scheduling Actually Mean for a Trade Shop?</h2>
        <p>
          &quot;AI scheduling&quot; covers a few different things, and it helps to separate them:
        </p>
        <ul>
          <li><strong>Booking windows.</strong> Offering a customer a realistic arrival window based on what is already on the calendar, instead of a back-and-forth by phone.</li>
          <li><strong>Intake that feeds the schedule.</strong> Capturing the address, problem type, and urgency up front so the office is not re-asking questions.</li>
          <li><strong>Route grouping.</strong> Suggesting which jobs sit near each other so a tech is not crossing from Beaverton to Oregon City and back before lunch.</li>
          <li><strong>Customer messages.</strong> Confirmations, reminders, and &quot;your tech is on the way&quot; texts.</li>
        </ul>
        <p>
          Most of this lives inside field-service software such as Jobber, Housecall Pro, or ServiceTitan. Those platforms have been adding automation and AI-assisted features, and what each plan includes changes often. Check what your current plan does before you buy another tool. Our <a href="/blog/ai-speed-to-lead-5-minute-rule">speed-to-lead post</a> explains why the first reply matters, and scheduling is where that reply turns into a booked job.
        </p>

        <h2>Where AI Helps a Small Shop Right Now</h2>
        <h3>Taking the back-and-forth out of booking</h3>
        <p>
          A homeowner in Milwaukie wants a water heater looked at. Without help, someone calls, leaves a voicemail, plays phone tag, and the homeowner books whoever answers first. With an intake flow that collects the basics and offers real windows, the job lands on the calendar while the customer is still thinking about it. Pair that with <a href="/blog/missed-calls-cost-trades-business-ai-answering">AI call answering and missed-call text-back</a> and fewer jobs leak out the door.
        </p>
        <h3>Cleaner job details before the tech leaves the shop</h3>
        <p>
          A good intake means the tech sees the problem, the address, the gate code, and any photos before the van moves. That is less about AI cleverness and more about asking the same good questions every time. An <a href="/blog/ai-receptionist-plumbing-company">AI receptionist for a plumbing company</a> can do exactly that, and the same pattern works for electrical and HVAC.
        </p>
        <h3>On-my-way texts and reminders</h3>
        <p>
          Customers who know when you are arriving are home when you arrive. That cuts wasted trips. These texts are usually a setting in your field-service software, not a custom AI project. If you text customers, make sure you have their consent and an opt-out path. Consent and opt-out rules apply, and your attorney should confirm the specifics for your business.
        </p>
        <h3>Drafting the daily plan</h3>
        <p>
          Some owners paste tomorrow&apos;s job list into an AI assistant and ask for a suggested order grouped by area and urgency. Treat it as a draft. It does not know that the Lake Oswego customer has a dog that needs to be put away, or that your best tech is the only one who can handle the old boiler on the list.
        </p>

        <h2>Where a Dispatcher&apos;s Judgment Still Wins</h2>
        <p>
          Dispatching is a people problem as much as a map problem. These calls should stay with a human:
        </p>
        <ul>
          <li><strong>Matching skill to job.</strong> Who is licensed and comfortable with what. Software can store skills, but someone has to decide when a job is outside them.</li>
          <li><strong>Reshuffling when a job runs long.</strong> A &quot;quick look&quot; that turns into a half-day repair affects every appointment behind it. Calling the next customer yourself is better than a canned apology.</li>
          <li><strong>Emergencies that jump the queue.</strong> A burst pipe beats a routine tune-up. Our post on <a href="/blog/ai-after-hours-emergency-triage-plumbers">after-hours emergency triage</a> covers how to set escalation rules so the call reaches a person fast.</li>
          <li><strong>Customer relationships.</strong> The long-time customer who always gets the first slot. The landlord with six properties. AI does not know these histories unless you write them down.</li>
        </ul>
        <p>
          The principle across this series is the same: AI drafts, a human approves. For dispatch, that means the software proposes and the person who knows the crew confirms.
        </p>

        <h2>How to Add AI to Your Scheduling Without Breaking It</h2>
        <ol>
          <li><strong>Write down your rules first.</strong> Service area, job types you take, how long common jobs run, what counts as an emergency. AI can only follow rules that exist on paper.</li>
          <li><strong>Start with intake, not dispatch.</strong> Better information coming in improves everything downstream, and it is low risk.</li>
          <li><strong>Turn on one automation at a time.</strong> Confirmations first, then reminders, then on-my-way texts. Watch for a few weeks before adding more.</li>
          <li><strong>Keep a manual override.</strong> Someone in the office should be able to move any job with one tap, without fighting the system.</li>
          <li><strong>Review weekly.</strong> Look at late arrivals, reschedules, and customer complaints. They show you which rule is wrong.</li>
        </ol>
        <p>
          If you are weighing software against hiring a dispatcher or office manager, our post on <a href="/blog/ai-automation-vs-hiring-oregon-business">AI automation versus hiring</a> walks through the tradeoffs honestly.
        </p>

        <h2>Questions to Ask Before You Buy Another Tool</h2>
        <ul>
          <li>Does this connect to the field-service software we already use, or does it create a second calendar?</li>
          <li>What happens when the system is unsure? Does it hand off to a person or guess?</li>
          <li>Can I see and edit everything it sent to customers?</li>
          <li>Who owns the customer data if we leave?</li>
        </ul>
        <p>
          A second calendar is the quiet killer. If bookings live in two places, someone will double-book a customer, and it will be your busiest day.
        </p>

        <h2>The Bottom Line</h2>
        <p>
          For a small shop, the realistic win is not a robot dispatcher. It is faster booking, better job details, fewer no-shows, and fewer hours spent on the phone arranging windows. Put the human judgment where it matters and let software handle the repetition.
        </p>
        <p>
          We build these systems for Portland-metro trades businesses. See how it fits on our <a href="/success-kit/plumbers">plumber lead system</a>, the <a href="/success-kit/electricians">electrician page</a>, or the <a href="/success-kit/hvac">HVAC page</a>, or <a href="/contact">contact us</a> to talk through your shop.
        </p>

        <h2>Related Reading</h2>
        <ul>
          <li><a href="/blog/ai-staff-scheduling-labor-cost-oregon-businesses">AI Staff Scheduling and Labor Costs for Oregon Businesses</a></li>
          <li><a href="/blog/ai-capture-leads-after-hours-small-business">Capturing Leads After Hours with AI</a></li>
          <li><a href="/blog/ai-follow-up-unsold-estimates-contractors">The Money Sitting in Unsold Estimates: AI Follow-Up for Contractors</a></li>
        </ul>
      </>
    ),
  },
  {
    slug: 'hvac-maintenance-plan-renewals-ai',
    title: 'Filling the Shoulder Season: AI Reminders for HVAC Maintenance Plans',
    metaTitle: 'HVAC Maintenance Plan Reminders with AI | Oregon',
    metaDescription:
      'HVAC maintenance plan reminders help fill the slow shoulder season. See how AI drafts tune-up, filter, and renewal messages while you set the plan terms.',
    date: 'October 25, 2026',
    publishDate: '2026-10-25',
    author: 'Winston',
    authorTitle: 'Head of AI Field Strategy',
    series: 'trades',
    excerpt:
      'Spring and fall are the quiet stretches between the heat and the cold. Maintenance plan reminders turn them into scheduled work, and AI handles the repetitive part.',
    heroImage: '/images/blog/trades/hvac-maintenance-plan-renewals-ai.webp',
    content: (
      <>
        <p>
          HVAC work in the Portland metro comes in waves. A heat wave or a hard freeze floods the phones, and then things go quiet. HVAC maintenance plan reminders are one of the few tools that smooth that out, because they put work on the calendar before the weather forces the issue. AI makes them far easier to run, as long as you keep a person in charge of what the plan actually promises.
        </p>
        <p>
          If you want the full picture of where AI fits in a trades shop, begin with our <a href="/blog/ai-for-plumbers-electricians-hvac-guide">practical guide for plumbers, electricians, and HVAC companies</a>. This post zooms in on one revenue lever.
        </p>

        <h2>Why Do Maintenance Plans Matter in the Shoulder Season?</h2>
        <p>
          The shoulder seasons, spring and fall, are when most homes need neither heat nor air conditioning for stretches at a time. Emergency calls drop. That is exactly when a tech can inspect a furnace before the first cold snap or check an AC before the first warm week.
        </p>
        <p>
          A maintenance plan gives the customer a reason to schedule in those slow weeks, and it gives you predictable work. It also puts you in the house before something breaks, which is when trust gets built. When the system does fail in July, the customer already has your number. We wrote about the other side of this in <a href="/blog/ai-hvac-heat-wave-cold-snap-call-surge">how HVAC companies handle the first heat wave and the first cold snap</a>. Maintenance reminders are how you take some pressure off those surges.
        </p>

        <h2>What Should You Remind Plan Customers About?</h2>
        <p>
          Four reminder types cover most shops:
        </p>
        <ul>
          <li><strong>Tune-up scheduling.</strong> A spring AC check and a fall furnace check, sent early enough that customers can pick a window before everyone else does.</li>
          <li><strong>Filter reminders.</strong> A short, friendly note that it is time to check or change the filter. Customers appreciate it, and it keeps your name in their inbox.</li>
          <li><strong>Renewal reminders.</strong> A heads-up before the plan lapses, with a clear way to renew.</li>
          <li><strong>Seasonal readiness tips.</strong> A few lines on clearing debris from the outdoor unit or testing the thermostat before cold weather. Keep them practical and general.</li>
        </ul>

        <h2>Where Does AI Fit In?</h2>
        <p>
          The work of a reminder program is repetitive: find the customers whose service is due, write a message that sounds like you, send it, follow up with the ones who did not respond. AI handles the drafting and the timing well.
        </p>
        <h3>Drafting the messages</h3>
        <p>
          Give an AI assistant such as ChatGPT or Claude a sample of how you talk to customers, then ask for a spring tune-up reminder, a renewal notice, and a filter note. You will get a first draft in seconds. Read it, fix anything that does not sound like your shop, and save it as a template. Your field-service software, whether Jobber, Housecall Pro, or ServiceTitan, may already be able to send these on a schedule. Check your plan before adding anything new.
        </p>
        <h3>Personalizing without getting creepy</h3>
        <p>
          &quot;Hi Dana, it has been about a year since we serviced the furnace at your home in West Linn&quot; reads as attentive. A message that lists everything you know about the customer reads as surveillance. Keep personalization to the basics: name, equipment type, last service timing.
        </p>
        <h3>Following up on silence</h3>
        <p>
          Most people who do not reply to the first reminder are not saying no. They are busy. A second message a week or two later catches many of them. Our post on <a href="/blog/ai-lead-follow-up-nurture-small-business">AI lead follow-up and nurture</a> covers cadence in more depth, and the same stop rules apply here: when someone books or opts out, the messages end.
        </p>

        <h2>What Does the Owner Decide?</h2>
        <p>
          AI does not decide what your plan includes. You do. Before any reminder goes out, the following should be settled and written down by you:
        </p>
        <ul>
          <li>What each plan covers, how many visits, and what is excluded</li>
          <li>The plan&apos;s term and renewal rules</li>
          <li>Any member benefits, such as scheduling priority, and exactly how they work</li>
          <li>How and when customers can cancel</li>
        </ul>
        <p>
          We deliberately do not put plan prices or perks in this post, because those are your business decisions. Whatever you promise in a reminder, your team has to honor. If the draft says &quot;priority service&quot; and your dispatch cannot deliver it in a heat wave, remove the phrase.
        </p>

        <h2>Consent, Texts, and Email</h2>
        <p>
          Reminders usually go by text or email. Texting in particular comes with consent and registration rules, including the TCPA and carrier registration known as A2P 10DLC. Customers on a plan have given you a relationship, but that does not automatically settle texting consent. Confirm how you collect and record it, make opting out easy, and check with your attorney about your specific setup.        </p>

        <h2>A Simple Reminder Calendar</h2>
        <ol>
          <li><strong>Early spring:</strong> AC tune-up reminder to plan customers, with scheduling link.</li>
          <li><strong>Mid spring:</strong> Gentle follow-up to those who have not booked.</li>
          <li><strong>Late summer:</strong> Furnace tune-up reminder, sent before the first chilly week.</li>
          <li><strong>Fall:</strong> Follow-up, plus a filter reminder.</li>
          <li><strong>Ahead of each renewal date:</strong> A renewal notice, then one follow-up.</li>
        </ol>
        <p>
          Adjust the dates to your own customer base. A shop that serves a lot of Happy Valley and Clackamas homes with newer systems may want a different rhythm than one working on older Milwaukie houses.
        </p>

        <h2>Measure It, Honestly</h2>
        <p>
          Track three things: how many reminders went out, how many turned into booked visits, and how many plan customers renewed. Do not expect a particular lift. Results depend on your list, your timing, and your follow-through. If few customers respond, the fix is usually the message or the offer, not more messages.
        </p>
        <p>
          We set up reminder systems like this for HVAC shops across Clackamas County and the Portland metro. Take a look at our <a href="/success-kit/hvac">HVAC lead and retention system</a>, or <a href="/contact">reach out</a> and we will talk through what makes sense for your plan.
        </p>

        <h2>Related Reading</h2>
        <ul>
          <li><a href="/blog/more-five-star-reviews-trades-ai">Getting More Five-Star Reviews After Every Service Call, Automatically</a></li>
          <li><a href="/blog/ai-follow-up-unsold-estimates-contractors">The Money Sitting in Unsold Estimates: AI Follow-Up for Contractors</a></li>
          <li><a href="/blog/ai-automation-vs-hiring-oregon-business">AI Automation vs. Hiring in an Oregon Business</a></li>
        </ul>
      </>
    ),
  },
  {
    slug: 'chatgpt-recommend-plumber-electrician-hvac',
    title: 'When a Homeowner Asks ChatGPT for a Plumber, Who Gets Named?',
    metaTitle: 'ChatGPT Recommend a Plumber or HVAC Company | Oregon',
    metaDescription:
      'When a homeowner asks ChatGPT to recommend a plumber, electrician, or HVAC company, a few businesses get named. Here is what helps and how to check yours.',
    date: 'October 26, 2026',
    publishDate: '2026-10-26',
    author: 'Winston',
    authorTitle: 'Head of AI Field Strategy',
    series: 'trades',
    excerpt:
      'Homeowners are starting to ask AI assistants for a plumber, electrician, or HVAC company instead of scrolling search results. No one can guarantee a mention, but the signals that help are clear.',
    heroImage: '/images/blog/trades/chatgpt-recommend-plumber-electrician-hvac.webp',
    content: (
      <>
        <p>
          A homeowner in Lake Oswego has water coming through the ceiling. Instead of scrolling a page of ads, she types a question into an AI assistant: who should I call for a plumber near me? The answer names a few businesses. If you ask whether ChatGPT will recommend a plumber, electrician, or HVAC company, the honest answer is that it names a handful per question, and which ones depends on what the assistant can find and verify about them.
        </p>
        <p>
          Nobody can guarantee that your company gets named. What you can do is make your business easy to find, easy to verify, and easy to describe. This post covers the signals that matter for trades and how to check where you stand. It builds on the <a href="/blog/ai-for-plumbers-electricians-hvac-guide">practical AI guide for trades shops</a> that opens this series.
        </p>

        <h2>Why Does the AI Shortlist Matter for Trades?</h2>
        <p>
          Home service customers decide quickly, especially when something is broken. They want a short list of credible names, not forty options. AI assistants are good at producing exactly that, and customers increasingly use them alongside Google, not instead of it. The shortlist is small, so being left off it costs you a call you never knew about.
        </p>
        <p>
          We explain the general mechanics in <a href="/blog/how-ai-assistants-choose-local-businesses-to-recommend">how AI assistants choose local businesses to recommend</a>. Here is how that plays out for a trades company.
        </p>

        <h2>What Signals Help a Plumber, Electrician, or HVAC Company Get Named?</h2>
        <p>
          Assistants pull from what is published about you across the web. Nobody outside the AI companies knows the exact formula, and it changes. These signals are consistently useful because they help people and machines alike verify who you are.
        </p>
        <h3>Reviews that say what you actually did</h3>
        <p>
          A review that reads &quot;replaced our water heater in West Linn and cleaned up after&quot; gives an assistant something specific to work with. Generic five-star reviews help less. You cannot script what customers say, and you should never gate, buy, or fake reviews. Asking every customer, right after the job, is the legitimate path. See <a href="/blog/more-five-star-reviews-trades-ai">how to get more five-star reviews after every service call</a>.
        </p>
        <h3>A complete, consistent Google Business Profile</h3>
        <p>
          Your categories, service areas, hours, and services should be accurate and match your website. Our post on <a href="/blog/google-business-profile-trades-ai">Google Business Profile for plumbers, electricians, and HVAC</a> walks through each field. Oregon&apos;s CCB requires your license number in advertising, so keeping it consistent across your profile and site also helps people confirm you are legitimate. Check CCB rules for the specifics.
        </p>
        <h3>Clear service pages</h3>
        <p>
          A page for each core service, written in plain language, with the areas you serve. &quot;Water heater replacement in Oregon City&quot; is more useful to a reader, and to an assistant, than a single page that says &quot;we do it all.&quot; More on that in our upcoming post on service area pages.
        </p>
        <h3>Consistent listings</h3>
        <p>
          Your name, address, and phone number should match across your website, Google, Facebook, Yelp, and trade directories. Conflicting details make you harder to trust and harder to describe.
        </p>
        <h3>Mentions from other sources</h3>
        <p>
          Local news, supplier pages, community sponsorships, and trade association listings show that you are a real business others vouch for. An assistant leans on what the wider web says about you, not only on your own site.
        </p>

        <h2>Is It Different From Regular Google SEO?</h2>
        <p>
          Mostly it is the same foundation, with a few differences. Google&apos;s own guidance is that AI features in Search do not need special markup or tricks beyond normal SEO fundamentals. Other assistants work from web content they can access, so a site that blocks crawlers can disappear from their answers. Our comparison, <a href="/blog/google-ai-overviews-oregon-small-businesses">what Google AI Overviews mean for Oregon small businesses</a>, covers the overlap in more detail.
        </p>

        <h2>How Can You Check Whether You Get Named?</h2>
        <p>
          Run a simple self-test. Do it from a logged-out browser or a fresh session when you can, because assistants can tailor answers.
        </p>
        <ol>
          <li>Write ten questions a homeowner might ask, such as &quot;best emergency plumber in Oregon City,&quot; &quot;who installs EV chargers near Milwaukie,&quot; or &quot;HVAC company that services heat pumps in Happy Valley.&quot;</li>
          <li>Ask each question in ChatGPT, Gemini, and Perplexity.</li>
          <li>Record whether you are named, who is named instead, and what the assistant says about you.</li>
          <li>Look for errors: wrong hours, wrong service area, a closed location, or a competitor&apos;s details mixed in with yours.</li>
          <li>Repeat monthly. Answers vary by day, so look for patterns, not single results.</li>
        </ol>
        <p>
          We lay out the full method in <a href="/blog/check-if-chatgpt-gemini-perplexity-recommend-your-business">how to check whether ChatGPT, Gemini, and Perplexity recommend your business</a>.
        </p>

        <h2>What Should You Fix First?</h2>
        <ul>
          <li><strong>Wrong information.</strong> If an assistant gets your hours or service area wrong, find the source, usually an outdated listing, and correct it.</li>
          <li><strong>Missing service pages.</strong> If you do a job but have no page explaining it, add one.</li>
          <li><strong>Review gaps.</strong> If competitors have far more recent reviews, build a steady ask into every job.</li>
          <li><strong>Thin profile.</strong> Fill in every field on your Google Business Profile.</li>
        </ul>
        <p>
          AI can help you draft pages and replies faster, but a person should approve everything that goes out under your name, and every fact about your business must come from you.
        </p>

        <h2>The Honest Limit</h2>
        <p>
          You can improve your odds, not buy a spot. Anyone promising guaranteed placement in ChatGPT is guessing. The work that holds up is the same work that helps real customers choose you: good reviews, accurate information, clear pages, and a reputation you can point to.
        </p>
        <p>
          Our <a href="/services/ai-search-visibility">AI Visibility &amp; Authority service</a> starts with an audit of where you stand today, and the <a href="/success-kit/plumbers">plumber</a>, <a href="/success-kit/electricians">electrician</a>, and <a href="/success-kit/hvac">HVAC</a> lead systems build it into the rest of your marketing. Or <a href="/contact">contact us</a> and we will run the check with you.
        </p>

        <h2>Related Reading</h2>
        <ul>
          <li><a href="/blog/how-ai-assistants-choose-local-businesses-to-recommend">How AI Assistants Decide Which Local Businesses to Recommend</a></li>
          <li><a href="/blog/check-if-chatgpt-gemini-perplexity-recommend-your-business">How to Check Whether ChatGPT, Gemini, and Perplexity Recommend Your Business</a></li>
          <li><a href="/our-seo-process/ai-search">Our AI Search Process</a></li>
        </ul>
      </>
    ),
  },
  {
    slug: 'service-area-pages-trades-local-seo',
    title: 'Service Area Pages That Actually Rank: Local SEO for Trades Across Portland Metro',
    metaTitle: 'Service Area Pages for Trades: Local SEO | Oregon',
    metaDescription:
      'Service area pages for trades work when each city page has real local detail. Learn how plumbers, electricians, and HVAC shops avoid thin doorway pages.',
    date: 'October 27, 2026',
    publishDate: '2026-10-27',
    author: 'Winston',
    authorTitle: 'Head of AI Field Strategy',
    series: 'trades',
    excerpt:
      'Copying one page across twenty city names is the fastest way to build pages nobody trusts. Real service area pages need real local detail, and that part has to come from you.',
    heroImage: '/images/blog/trades/service-area-pages-trades-local-seo.webp',
    content: (
      <>
        <p>
          Every plumber, electrician, and HVAC company eventually has the same idea: make a page for every city we serve. It is a good idea when done well. Service area pages for trades help customers in Oregon City, Milwaukie, and Beaverton see that you actually work in their town. Done badly, they become thin copies with a city name swapped in, and they do little for customers or for search.
        </p>
        <p>
          This post shows how to build service area pages that earn their place, and where AI helps. It is part of our <a href="/blog/ai-for-plumbers-electricians-hvac-guide">AI series for trades businesses</a>.
        </p>

        <h2>What Is a Doorway Page, and Why Should You Avoid It?</h2>
        <p>
          A doorway page is a near-duplicate page made only to catch searches for a location. Picture twenty pages titled &quot;Plumber in [City]&quot; where the only difference is the city name. Google&apos;s spam policies address this pattern directly, so read the current wording on Google&apos;s own site rather than relying on a summary from us or anyone else.
        </p>
        <p>
          Beyond policy, it is a trust problem. A homeowner who lands on a page that says nothing specific about her town learns nothing about you. A page that does say something specific gives her a reason to call.
        </p>

        <h2>What Makes a Service Area Page Genuinely Useful?</h2>
        <p>
          A good page answers the questions a person in that town would ask. Start with what is true of your work there:
        </p>
        <ul>
          <li><strong>Which services you offer in that area.</strong> If you do not run emergency calls in a given city, do not claim it.</li>
          <li><strong>Local housing and its quirks.</strong> Older homes in parts of Milwaukie and Oregon City tend to bring different plumbing and wiring questions than newer builds in Happy Valley. Only write what you have seen on real jobs.</li>
          <li><strong>Real job examples.</strong> A short description of a type of job you did in that city, with the customer&apos;s permission and without a street address.</li>
          <li><strong>How to reach you.</strong> Click-to-call, hours, and your Oregon CCB license number. Oregon&apos;s CCB requires your license number in advertising, so check CCB rules for exactly how it must appear.</li>
          <li><strong>Reviews from customers in that area.</strong> If a customer in West Linn mentions the town, that is a natural fit for the West Linn page.</li>
          <li><strong>Local logistics.</strong> How long a typical drive is, where your shop sits relative to the area, and whether you serve it every day.</li>
        </ul>

        <h2>Which Cities Deserve Their Own Page?</h2>
        <p>
          Not every town needs a page. Build one where you can honestly say something real. For a shop based in Clackamas County, a sensible start might be Oregon City, Milwaukie, Lake Oswego, West Linn, Happy Valley, Clackamas, and Beaverton, but only the ones you actually serve. Cities with lots of jobs get more detail. Cities where you work occasionally can share a single &quot;also serving&quot; section on a broader page.
        </p>
        <p>
          A good test: could you have a five-minute phone conversation with a customer in that town about what it is like to work there? If not, you do not have enough for a page yet.
        </p>

        <h2>How Does AI Help Without Making Thin Pages?</h2>
        <p>
          AI is useful for the slow parts and risky for the factual parts. Here is a split that works:
        </p>
        <h3>What AI is good for</h3>
        <ul>
          <li>Drafting the page structure and headings</li>
          <li>Turning your rough job notes into readable paragraphs</li>
          <li>Writing FAQ answers in plain language from facts you provide</li>
          <li>Tightening copy and checking for repetition across pages</li>
        </ul>
        <h3>What a human must supply</h3>
        <ul>
          <li>Every fact about your business: services, areas, hours, license number</li>
          <li>Real job details and photos with permission</li>
          <li>Anything about the neighborhood that you have not personally seen. AI will confidently make things up about a town, so never publish its description of a place unchecked</li>
        </ul>
        <p>
          If you give AI the same prompt for each city, it will give you the same page for each city. Feed it different real details for each one: the job types, the house ages you see, the questions customers there ask.
        </p>

        <h2>How Should You Structure the Page?</h2>
        <ol>
          <li><strong>Headline with service and city.</strong> For example, plumbing services in Oregon City, if that is what you do there.</li>
          <li><strong>A short intro in your voice.</strong> Who you are, how long you have served the area, what you are known for, only as true as you can document.</li>
          <li><strong>Services you offer there,</strong> each linking to its own service page.</li>
          <li><strong>A real local example or two.</strong></li>
          <li><strong>Reviews and license info.</strong></li>
          <li><strong>Local FAQ.</strong> Questions people actually ask, such as permit questions for a water heater swap or whether you work on older panels.</li>
          <li><strong>A clear call to action,</strong> with click-to-call at the top on mobile.</li>
        </ol>
        <p>
          Link the area pages to the service pages and the service pages back to the areas, so the site hangs together. Our <a href="/blog/local-seo-oregon-city-guide">Oregon City local SEO guide</a> shows the local fundamentals that sit under all of this.
        </p>

        <h2>Do Service Area Pages Help With AI Search Too?</h2>
        <p>
          They can. Assistants and search engines both rely on clear, specific, verifiable pages. A page that states what you do in a given city, backed by real reviews and a license number, gives them something concrete. No page guarantees you get named, as we explain in <a href="/blog/chatgpt-recommend-plumber-electrician-hvac">when a homeowner asks ChatGPT for a plumber</a>. But vague pages almost guarantee you are not.
        </p>

        <h2>Keep the Google Profile in Step</h2>
        <p>
          Your service area pages should match your Google Business Profile. If the profile lists a service area your website does not mention, or the reverse, fix it. See <a href="/blog/google-business-profile-trades-ai">Google Business Profile for the trades</a> for how to keep both aligned.
        </p>

        <h2>A Reasonable Plan</h2>
        <ol>
          <li>Pick your three strongest cities.</li>
          <li>Collect two real job stories and a few reviews for each.</li>
          <li>Have AI draft from your notes; you edit and confirm every fact.</li>
          <li>Publish, then add the next city only when you have real material.</li>
        </ol>
        <p>
          Our <a href="/services/website-in-7-days">Website in 7 Days</a> service builds these pages with the structure above, and the <a href="/success-kit/plumbers">plumber</a>, <a href="/success-kit/electricians">electrician</a>, and <a href="/success-kit/hvac">HVAC</a> pages show the full lead system. <a href="/contact">Contact us</a> if you want help deciding which cities to start with.
        </p>

        <h2>Related Reading</h2>
        <ul>
          <li><a href="/blog/google-business-profile-trades-ai">Google Business Profile for Plumbers, Electricians, and HVAC</a></li>
          <li><a href="/blog/how-customers-find-small-business-ai-local-search">How Customers Find Your Small Business Now</a></li>
          <li><a href="/our-seo-process">Our SEO Process</a></li>
        </ul>
      </>
    ),
  },
  {
    slug: 'ai-technician-job-photos-notes-content',
    title: 'Turning Technician Job Photos and Notes into Marketing with AI',
    metaTitle: 'Turn Technician Job Photos into Marketing | Oregon',
    metaDescription:
      'Technician job photos and notes are free marketing material. See how AI turns them into Google posts, project pages, and social content, with customer consent.',
    date: 'October 28, 2026',
    publishDate: '2026-10-28',
    author: 'Winston',
    authorTitle: 'Head of AI Field Strategy',
    series: 'trades',
    excerpt:
      'Your techs already take photos and write notes on every job. With a simple process and customer permission, AI can turn that raw material into posts and project pages.',
    heroImage: '/images/blog/trades/ai-technician-job-photos-notes-content.webp',
    content: (
      <>
        <p>
          Most trades businesses already produce marketing material every day and throw it away. Technician job photos and notes sit in a phone gallery or a field-service app, never to be seen again. The before-and-after of a re-piped bathroom, the tidy new panel, the furnace swap in a tight crawlspace: that is exactly what a prospective customer wants to see. AI makes it practical to turn it into content without hiring a marketing person, as long as you handle consent and accuracy carefully.
        </p>
        <p>
          This post is part of our <a href="/blog/ai-for-plumbers-electricians-hvac-guide">practical AI guide for trades shops</a> series. It focuses on one habit that pays off across your profile, website, and social channels.
        </p>

        <h2>What Counts as Good Raw Material?</h2>
        <ul>
          <li><strong>Before and after photos.</strong> Same angle, decent light, nothing personal in frame.</li>
          <li><strong>Short tech notes.</strong> What the problem was, what was done, anything unusual, in the tech&apos;s own words.</li>
          <li><strong>Process shots.</strong> A clean panel label, a neat gas line connection, a properly supported pipe run. These show craftsmanship.</li>
          <li><strong>Equipment details.</strong> The make and model installed, when the customer is fine with it being shared.</li>
        </ul>
        <p>
          The notes matter as much as the photos. A photo says what it looks like. The note says why it mattered.
        </p>

        <h2>Get Customer Permission First</h2>
        <p>
          This is the step to get right before anything else. Customers&apos; homes are private. Before you post a job:
        </p>
        <ul>
          <li>Ask permission to use photos of the work, ideally in writing. A line on your work order or a quick text reply can serve as a record. Ask your attorney what language works best for your business.</li>
          <li>Leave out street addresses. A city or neighborhood is plenty, for example &quot;a kitchen repipe in Oregon City.&quot;</li>
          <li>Keep faces, family photos, mail, license plates, and house numbers out of frame, or crop and blur them.</li>
          <li>Honor a no. If someone declines or later asks you to take a post down, do it.</li>
        </ul>
        <p>
          Do not paste customer names, addresses, or phone numbers into a public AI tool to get a draft. Describe the job generically. Our <a href="/blog/ai-risks-small-business-responsible-use-checklist">responsible AI use checklist</a> covers what is safe to share with these tools.
        </p>

        <h2>A Simple Workflow From the Field to the Feed</h2>
        <ol>
          <li><strong>The tech captures.</strong> Two to four photos and two or three lines of notes, right at job completion. Make it part of closing out the ticket.</li>
          <li><strong>Someone checks permission.</strong> One person in the office confirms the customer said yes.</li>
          <li><strong>AI drafts.</strong> Feed it the notes with identifying details removed. Ask for a short Google post, a project description, and a social caption.</li>
          <li><strong>A human edits.</strong> Fix anything inaccurate, cut anything that sounds like hype, and make sure the tone is yours.</li>
          <li><strong>Publish in more than one place.</strong> The same job can become a profile post, a project page, and a social post, each trimmed to fit.</li>
        </ol>

        <h2>Where Does Each Piece Go?</h2>
        <h3>Google Business Profile posts</h3>
        <p>
          Short and concrete: the problem, the fix, the town. Fresh photos and posts show customers you are active. See our guide to <a href="/blog/google-business-profile-trades-ai">what AI can keep updated on your Google profile</a>.
        </p>
        <h3>Project pages on your website</h3>
        <p>
          A running gallery of real work, organized by service. Each entry can link to the matching service page and your <a href="/blog/service-area-pages-trades-local-seo">service area pages</a>. These pages give search engines and AI assistants specific evidence of what you do.
        </p>
        <h3>Social posts</h3>
        <p>
          Before-and-afters perform well on Facebook and Instagram, and a short video walkthrough can too. Our <a href="/services/social-media-content-engine">Social Media Content Engine</a> is built around exactly this kind of real-job content.
        </p>
        <h3>Review requests</h3>
        <p>
          A finished-job photo can accompany a thank-you text with a review link. See <a href="/blog/more-five-star-reviews-trades-ai">getting more five-star reviews after every service call</a>.
        </p>

        <h2>What AI Should Not Do Here</h2>
        <ul>
          <li><strong>Invent details.</strong> If the note does not say the pipe was corroded, the post should not either. AI fills gaps with plausible fiction, so read every sentence.</li>
          <li><strong>Make claims you cannot support.</strong> Words like &quot;best,&quot; &quot;guaranteed,&quot; or &quot;code compliant&quot; need real backing. Stick to what was done.</li>
          <li><strong>Edit photos to mislead.</strong> Cleaning up lighting is fine. Altering the work is not.</li>
          <li><strong>Publish without a human.</strong> Every post goes through a person.</li>
        </ul>

        <h2>How Do You Get Technicians to Take the Photos?</h2>
        <p>
          This is where most programs die. Techs are busy, and a request that feels like extra paperwork gets skipped. A few things help:
        </p>
        <ul>
          <li><strong>Keep the ask tiny.</strong> Two photos and two lines. Nobody needs a photo shoot.</li>
          <li><strong>Show them the result.</strong> When a tech&apos;s job becomes a post or a review mention, tell them. Credit the tech by first name, with their okay.</li>
          <li><strong>Use the phone they already carry.</strong> If your field-service app lets them attach photos to the job, use that instead of a new tool.</li>
          <li><strong>Teach one habit:</strong> wipe the lens, step back, and shoot the same angle before and after.</li>
        </ul>
        <p>
          A short voice note converted to text also works well for the notes. A tech can talk through the job in thirty seconds while cleaning up, and an AI assistant can tidy the transcript into clean sentences that the tech then glances over for accuracy.
        </p>

        <h2>Make It Stick</h2>
        <p>
          The process fails when it depends on someone remembering. Tie it to something that already happens: closing a ticket in Jobber, Housecall Pro, or ServiceTitan, or the end-of-day text from the tech. Give one person ownership of the weekly batch, and keep it small. Three solid posts a week from real jobs beats a burst of effort that dies in a month.
        </p>
        <p>
          We build this loop for clients, and the <a href="/success-kit/hvac">HVAC</a>, <a href="/success-kit/plumbers">plumber</a>, and <a href="/success-kit/electricians">electrician</a> systems connect it to the rest of your lead flow. <a href="/contact">Get in touch</a> to talk about setting it up.
        </p>

        <h2>Related Reading</h2>
        <ul>
          <li><a href="/blog/google-business-profile-ai-management-small-business">How AI Helps Manage Your Google Business Profile</a></li>
          <li><a href="/blog/ai-reputation-management-small-business">AI Reputation Management for Small Business</a></li>
          <li><a href="/blog/what-ai-can-and-cannot-do-business-2026">What AI Can and Cannot Do for Your Business in 2026</a></li>
        </ul>
      </>
    ),
  },
  {
    slug: 'ai-social-media-plumbers-electricians-hvac',
    title: 'Social Media for the Trades Without the Time Sink',
    metaTitle: 'Social Media for Plumbers and Electricians | Oregon',
    metaDescription:
      'Social media for plumbers, electricians, and HVAC shops does not need hours a week. Pick the right platforms and let AI draft posts from your real jobs.',
    date: 'October 29, 2026',
    publishDate: '2026-10-29',
    author: 'Winston',
    authorTitle: 'Head of AI Field Strategy',
    series: 'trades',
    excerpt:
      'You do not need to go viral to get value from social media. You need to show up steadily with real work from real jobs, and AI can do most of the drafting.',
    heroImage: '/images/blog/trades/ai-social-media-plumbers-electricians-hvac.webp',
    content: (
      <>
        <p>
          Ask a trades owner how social media is going and you will usually hear a sigh. It feels like another job on top of the job. The good news is that social media for plumbers, electricians, and HVAC companies does not have to eat your week. You are not trying to go viral. You are trying to be the familiar, trustworthy name when a neighbor asks who to call. A steady, simple routine, with AI drafting the first pass, is enough.
        </p>
        <p>
          This is one of several posts in our <a href="/blog/ai-for-plumbers-electricians-hvac-guide">AI series for trades businesses</a>. Here we focus on what is worth doing and what to skip.
        </p>

        <h2>What Is Social Media Actually For in a Trades Business?</h2>
        <p>
          For most home service companies, social media does three jobs. It proves you are a real, active local business. It keeps you top of mind with past customers, so they call you again. And it gives neighbors something to point to when they recommend you. It is rarely the main source of emergency calls, because those come from search and referrals. Set your expectations accordingly, and nobody can promise you a particular number of leads from it.
        </p>

        <h2>Which Platforms Are Worth Your Time?</h2>
        <p>
          You do not need to be everywhere. Pick one or two and do them consistently.
        </p>
        <ul>
          <li><strong>Facebook.</strong> Still where many homeowners in Clackamas County and the Portland suburbs ask for recommendations, especially in local community groups. A business page plus careful participation in groups goes a long way. Read each group&apos;s rules first, since many limit self-promotion.</li>
          <li><strong>Nextdoor.</strong> Neighbors ask for trades recommendations here constantly. A complete business profile and happy customers who mention you help more than posting.</li>
          <li><strong>Instagram.</strong> Good for before-and-after work and short videos. Worth it if your jobs photograph well, such as remodels, panel upgrades, or clean installs.</li>
          <li><strong>Short video.</strong> A 30-second clip explaining one common problem can be effective, but it takes more effort. Add it after your basics are steady.</li>
          <li><strong>Your Google Business Profile.</strong> Not social media in the usual sense, but posting there is often more valuable for a local trade. See our post on <a href="/blog/google-business-profile-trades-ai">what AI can keep updated on your Google profile</a>.</li>
        </ul>

        <h2>What Should You Post?</h2>
        <p>
          Real work beats generic tips, and generic tips beat stock photos. A weekly mix might look like this:
        </p>
        <ol>
          <li><strong>One job highlight.</strong> A before-and-after with a short explanation. See <a href="/blog/ai-technician-job-photos-notes-content">turning technician job photos and notes into marketing</a> for the consent steps.</li>
          <li><strong>One seasonal tip.</strong> Before the first freeze: how to find your main water shut-off. Before summer: change the filter. Keep tips general and safe.</li>
          <li><strong>One people post.</strong> Introduce a tech, mark a work anniversary, or share a community event you support.</li>
        </ol>
        <p>
          Safety content needs care. General advice such as knowing where your shut-offs are is fine. Anything about gas smells, sparking outlets, or carbon monoxide should say plainly to leave the home and call the gas utility or 911, never to troubleshoot it yourself.
        </p>

        <h2>How Does AI Cut the Time?</h2>
        <p>
          The slow part of social media is staring at a blank box. AI removes that.
        </p>
        <h3>A weekly batch in about 30 minutes</h3>
        <p>
          Once a week, someone pastes in three real job notes (with customer details removed) and asks an AI assistant such as ChatGPT or Claude for a draft post for each, in your shop&apos;s voice. You edit, pick the best photo, and schedule them with the free scheduler built into Facebook or Instagram, or any tool you already pay for.
        </p>
        <h3>Teaching it your voice</h3>
        <p>
          Give the assistant three or four past posts or emails you like, and tell it: plain language, no hype, no emojis if that is your style, no exclamation-point pileups. Save that instruction and reuse it.
        </p>
        <h3>A seasonal idea bank</h3>
        <p>
          Ask for a list of twelve post ideas for the coming month, based on your services and the Pacific Northwest seasons. Then choose the ones you can back up with real photos. We map the full year in an upcoming calendar post, and our existing guide to <a href="/blog/most-powerful-ai-automations-portland-metro">roundup of AI automations for Portland metro businesses</a> covers tools worth considering.
        </p>

        <h2>What Should a Human Always Check?</h2>
        <ul>
          <li><strong>Facts.</strong> Hours, areas served, service claims, license info. Oregon&apos;s CCB requires your license number in advertising, so check CCB rules for how it applies to your posts and pages.</li>
          <li><strong>Tone.</strong> Does it sound like your shop or like a brochure?</li>
          <li><strong>Privacy.</strong> No addresses, faces, or house numbers without permission.</li>
          <li><strong>Replies.</strong> AI can draft replies to comments, but a person should send them. A tone-deaf automated reply to a complaint does real damage.</li>
        </ul>

        <h2>What Should You Skip?</h2>
        <ul>
          <li><strong>Posting daily on five platforms.</strong> You will burn out by March.</li>
          <li><strong>Paying for followers.</strong> A follower count means nothing if none of them live in Oregon City.</li>
          <li><strong>Arguing in comment sections.</strong> Reply politely or take it offline.</li>
          <li><strong>Trend-chasing.</strong> A dance video rarely books a water heater job.</li>
        </ul>

        <h2>Consistency Over Virality</h2>
        <p>
          A trades business does not need a hit post. It needs twelve months of steady, honest ones. A homeowner who checks your page before calling should see recent activity, real work, and happy comments. That builds trust, and it feeds the profile and review signals that also influence <a href="/blog/chatgpt-recommend-plumber-electrician-hvac">whether AI assistants name you</a>.
        </p>
        <p>
          If you would rather not run it yourself, our <a href="/services/social-media-content-engine">Social Media Content Engine</a> handles the drafting and scheduling with your approval at each step. See how it fits into the <a href="/success-kit/plumbers">plumber</a>, <a href="/success-kit/electricians">electrician</a>, and <a href="/success-kit/hvac">HVAC</a> lead systems, or <a href="/contact">contact us</a> to talk it over.
        </p>

        <h2>Related Reading</h2>
        <ul>
          <li><a href="/blog/more-five-star-reviews-trades-ai">Getting More Five-Star Reviews After Every Service Call, Automatically</a></li>
          <li><a href="/blog/ai-reputation-management-small-business">AI Reputation Management for Small Business</a></li>
          <li><a href="/blog/how-customers-find-small-business-ai-local-search">How Customers Find Your Small Business Now</a></li>
        </ul>
      </>
    ),
  },
  {
    slug: 'ai-text-messaging-home-service-customers',
    title: 'On-My-Way Texts, Reminders, and Follow-Ups: AI Text Messaging for Service Businesses',
    metaTitle: 'AI Text Messaging for Home Service Businesses | Oregon',
    metaDescription:
      'AI text messaging for home service businesses covers on-my-way texts, reminders, and review asks. Learn the tone, the consent basics, and the human checks.',
    date: 'October 30, 2026',
    publishDate: '2026-10-30',
    author: 'Winston',
    authorTitle: 'Head of AI Field Strategy',
    series: 'trades',
    excerpt:
      'Customers like knowing when you are coming and hearing from you after the job. Text messaging does that well, provided you get consent right and keep the tone human.',
    heroImage: '/images/blog/trades/ai-text-messaging-home-service-customers.webp',
    content: (
      <>
        <p>
          Most homeowners would rather get a text than a phone call from a number they do not recognize. That makes AI text messaging for home service businesses one of the easiest wins in a trades shop: confirmations, on-my-way notices, reminders, and a polite follow-up after the job. AI helps by drafting the messages and routing the replies. The part that deserves real attention is consent, because texting customers is regulated, and the tone, because a cold or robotic text can undo the goodwill you just earned.
        </p>
        <p>
          This post is part of our series on <a href="/blog/ai-for-plumbers-electricians-hvac-guide">AI for plumbers, electricians, and HVAC companies</a>. Nothing here is legal advice, so run your texting setup past your attorney.
        </p>

        <h2>Which Texts Are Worth Sending?</h2>
        <ul>
          <li><strong>Appointment confirmation.</strong> Sent right after booking, with the date, window, and address on file so the customer can catch a mistake.</li>
          <li><strong>Reminder.</strong> The day before or the morning of, with an easy way to reschedule.</li>
          <li><strong>On-my-way text.</strong> Sent when the tech heads over, with the tech&apos;s first name and an arrival estimate. Customers who know you are coming are home when you arrive.</li>
          <li><strong>Running-late notice.</strong> Honest and early beats silent. See our <a href="/blog/ai-scheduling-dispatch-small-trade-shops">post on scheduling and dispatch</a> for how to handle a job that runs long.</li>
          <li><strong>Post-job follow-up.</strong> A short thank-you and a check that everything is working.</li>
          <li><strong>Review request.</strong> Sent after the job is done, with a direct link. We cover timing in <a href="/blog/more-five-star-reviews-trades-ai">getting more five-star reviews after every service call</a>.</li>
          <li><strong>Missed-call text-back.</strong> A quick message when you cannot pick up. See <a href="/blog/missed-calls-cost-trades-business-ai-answering">why every missed call is a job for your competitor</a>.</li>
        </ul>
        <p>
          Many of these are built-in settings in field-service tools such as Jobber, Housecall Pro, and ServiceTitan. Check what your plan includes before adding another service.
        </p>

        <h2>What Do You Need to Know About Consent and Opt-Out?</h2>
        <p>
          Text messages to customers fall under rules you should take seriously. The Telephone Consumer Protection Act (TCPA) governs many kinds of texting, and carriers require businesses that send texts through business messaging platforms to register under a framework called A2P 10DLC. Messages from unregistered senders can be blocked.
        </p>
        <p>
          Here is the practical, non-legal-advice version:
        </p>
        <ul>
          <li><strong>Get and record consent.</strong> Know how and when each customer agreed to receive texts, and keep that record.</li>
          <li><strong>Make opting out easy.</strong> Honor a STOP reply immediately and everywhere, not just in one system.</li>
          <li><strong>Register your messaging.</strong> If your software sends from a business number, ask the vendor how they handle A2P 10DLC registration for you.</li>
          <li><strong>Separate service texts from promotions.</strong> The rules can differ for informational and marketing messages. Ask your attorney how they apply to you.</li>
          <li><strong>Check the rules themselves.</strong> The details change, so rely on current guidance from your attorney and the FCC, not on a blog post, ours included.</li>
        </ul>

        <h2>How Does AI Help With Texting?</h2>
        <h3>Drafting templates</h3>
        <p>
          Ask an AI assistant to write a confirmation, an on-my-way note, and a follow-up in your shop&apos;s voice, then save them as templates. You approve them once, and every customer gets a consistent, polished message. This is the safest and most useful use of AI in texting.
        </p>
        <h3>Handling replies</h3>
        <p>
          Customers reply: &quot;Can you come an hour later?&quot; &quot;Is the tech bringing the part?&quot; AI can suggest an answer for a staff member to approve, or answer simple scheduling questions automatically within rules you set. Anything involving pricing, diagnosis, complaints, or safety goes to a person.
        </p>
        <h3>Timing and stop rules</h3>
        <p>
          Software can send at sensible hours, avoid messaging someone who has opted out, and stop a follow-up sequence the moment a customer books or replies. Set quiet hours so nobody gets a promotional text at 10 PM. Our post on <a href="/blog/ai-follow-up-unsold-estimates-contractors">following up on unsold estimates</a> explains cadence and stop rules in detail.
        </p>

        <h2>What Should the Tone Be?</h2>
        <p>
          Write like a person at your shop would speak. Short, specific, and warm.
        </p>
        <ul>
          <li><strong>Use the tech&apos;s name.</strong> &quot;Marcus is on his way and should arrive between 1 and 2&quot; feels human. &quot;Your technician has been dispatched&quot; does not.</li>
          <li><strong>Say who you are.</strong> Start with your company name, since customers may not have your number saved.</li>
          <li><strong>One ask per message.</strong> Do not combine a reminder, a review request, and a plan offer.</li>
          <li><strong>Skip the hype and the emojis,</strong> unless that is truly how you talk.</li>
          <li><strong>Be honest about delays.</strong> People forgive a late tech who warned them. They do not forgive silence.</li>
        </ul>

        <h2>Where Should a Human Step In?</h2>
        <p>
          Texting is fast, and fast mistakes are expensive. Keep a person in the loop for:
        </p>
        <ul>
          <li>Any customer who sounds upset or confused</li>
          <li>Pricing questions and anything that sounds like a quote</li>
          <li>Safety issues. If a customer texts about a gas smell, sparking, burning, or carbon monoxide, the reply is to leave the home and call the gas utility or 911. This should be a fixed script, not an AI conversation</li>
          <li>Any message that will go to your whole customer list</li>
        </ul>
        <p>
          Review the log of sent messages weekly. You will spot templates that confuse people and replies that need a better answer.
        </p>

        <h2>A Starter Setup for a Small Shop</h2>
        <ol>
          <li>Confirm what your field-service software already sends, and whether your consent records are in order.</li>
          <li>Write five templates: confirmation, reminder, on-my-way, follow-up, review request.</li>
          <li>Turn on confirmations and on-my-way texts first.</li>
          <li>Add the review request after a couple of weeks.</li>
          <li>Review replies and opt-outs weekly for the first month.</li>
        </ol>
        <p>
          We set up customer messaging for trades businesses across the Portland metro, from Oregon City to Beaverton. Start with the <a href="/success-kit/plumbers">plumber</a>, <a href="/success-kit/electricians">electrician</a>, or <a href="/success-kit/hvac">HVAC</a> lead system, or <a href="/contact">contact us</a> to walk through yours.
        </p>

        <h2>Related Reading</h2>
        <ul>
          <li><a href="/blog/ai-speed-to-lead-5-minute-rule">The 5-Minute Rule: AI Speed to Lead</a></li>
          <li><a href="/blog/hvac-maintenance-plan-renewals-ai">Filling the Shoulder Season: AI Reminders for HVAC Maintenance Plans</a></li>
          <li><a href="/blog/ai-lead-follow-up-nurture-small-business">AI Lead Follow-Up and Nurture for Small Business</a></li>
        </ul>
      </>
    ),
  },
  {
    slug: 'ai-hiring-technicians-trades',
    title: 'Hiring Technicians Is Hard. Here\'s Where AI Helps (and Where It Shouldn\'t)',
    metaTitle: 'Hiring Technicians for the Trades with AI | Oregon',
    metaDescription:
      'Hiring technicians for the trades is hard. See where AI helps with job posts, scheduling, and onboarding, and why a human must make every hiring decision.',
    date: 'October 31, 2026',
    publishDate: '2026-10-31',
    author: 'Winston',
    authorTitle: 'Head of AI Field Strategy',
    series: 'trades',
    excerpt:
      'AI can write a better job post and save hours of scheduling. It should never be the one deciding who gets a call back. Here is a sensible split.',
    heroImage: '/images/blog/trades/ai-hiring-technicians-trades.webp',
    content: (
      <>
        <p>
          Ask almost any plumbing, electrical, or HVAC owner what limits growth and the answer is often the same: not enough good technicians. Hiring technicians for the trades is slow, and the work around it eats the owner&apos;s evenings. AI can take real time off that work. It can also cause real harm if you let it make decisions it should not. This post sets out where AI helps a trades shop hire, and where the line is.
        </p>
        <p>
          It is one in a series; the opening piece, <a href="/blog/ai-for-plumbers-electricians-hvac-guide">AI for plumbers, electricians, and HVAC companies</a>, covers the wider picture.
        </p>

        <h2>Where Does AI Help With Hiring Technicians?</h2>
        <h3>Writing a job post people want to answer</h3>
        <p>
          Most trade job posts read the same: a wall of requirements and a vague promise of competitive pay. Give an AI assistant your real details, such as the work, the service area, the schedule, the truck and tools situation, and how you train, and ask for a clear, honest post. You supply every fact; AI supplies the structure and the readable language. Then you edit it until it sounds like your shop.
        </p>
        <p>
          Be careful with pay and benefits. Say only what you can stand behind, and check current Oregon and local requirements for what a job posting must include. Confirm the details with the state or your attorney rather than relying on us.
        </p>
        <h3>A careers page that does some of the selling</h3>
        <p>
          Applicants research you before applying. A simple careers page with what a typical week looks like, how you train new techs, what the crew is like, and how to apply can pull in better candidates. Use real photos of your crew with their permission. The same habits that make a service page work, covered in <a href="/blog/why-your-website-is-not-generating-leads">why your website is not generating leads</a>, apply to a hiring page, too: clear next step, fast on mobile, real photos.
        </p>
        <h3>Handling the logistics</h3>
        <p>
          Scheduling interviews, sending reminders, answering the same five questions about the schedule and the service area, and sending forms are chores that AI and automation do well. This is the same pattern as customer booking, covered in <a href="/blog/ai-scheduling-dispatch-small-trade-shops">AI scheduling and dispatch for small trade shops</a>.
        </p>
        <h3>Onboarding documents</h3>
        <p>
          A first-week checklist, a vehicle and tool policy, a plain-language version of your safety expectations, and a who-to-call list can all be drafted with AI from your notes. You, or a person who knows the work, must review each one. Safety procedures in particular should come from your actual practices and the relevant regulations, not from an assistant&apos;s best guess.
        </p>

        <h2>Where Should AI Stay Out of Hiring?</h2>
        <p>
          This is the important part. Keep AI away from the decision itself.
        </p>
        <ul>
          <li><strong>No automatic rejections.</strong> Do not let software screen out applicants without a person reviewing. An applicant with a nonstandard resume might be your best hire, and automated filters can quietly exclude people for the wrong reasons.</li>
          <li><strong>No scoring people on traits AI cannot judge.</strong> Reliability, attitude, and hands-on ability come out in conversation and in a ride-along, not in a ranked list from a tool.</li>
          <li><strong>Mind bias and the law.</strong> Hiring is covered by anti-discrimination laws, and automated tools can create legal exposure even when nobody intended it. Some jurisdictions are regulating AI in hiring. Ask your attorney before using any screening tool.</li>
          <li><strong>A human decides.</strong> Every interview, offer, and rejection is a person&apos;s decision.</li>
        </ul>
        <p>
          That is the same rule we apply everywhere in this series: AI drafts, humans approve. Our <a href="/blog/ai-risks-small-business-responsible-use-checklist">responsible AI use checklist</a> goes deeper on where to draw those lines.
        </p>

        <h2>What About Applicant Privacy?</h2>
        <p>
          Resumes contain personal information. Do not paste applicants&apos; details into a free public AI tool. If you use AI on applicant material at all, use a business account with terms you have read, and limit who can see it. When in doubt, summarize the role, not the person.
        </p>

        <h2>How Do Apprenticeships Fit In?</h2>
        <p>
          Many Oregon trades companies grow their own techs through apprenticeships. AI does not replace that, but it can make the front end easier: a clear explanation of how your apprenticeship works, what a new hire learns in the first months, and a simple way for interested people to ask questions. Check current requirements with the relevant Oregon trade licensing and apprenticeship authorities, since rules and licensing paths are specific to each trade, and do not state them in your posts unless you have verified them.
        </p>
        <p>
          Partnerships with local high school and community college programs in the Clackamas and Portland area are another pipeline. AI can help you draft the outreach email, but you still have to show up and build the relationship.
        </p>

        <h2>A Practical Hiring Workflow</h2>
        <ol>
          <li>Write down the role honestly: duties, schedule, pay range you are prepared to state, and training.</li>
          <li>Have AI draft the post and a short careers page section. Edit every fact.</li>
          <li>Post it where trades workers actually look, and ask your own crew for referrals.</li>
          <li>Use automation for scheduling and reminders only.</li>
          <li>Review every applicant yourself, or have a trusted person do it.</li>
          <li>Use a ride-along or paid trial day, as your attorney and insurance allow, to see the work firsthand.</li>
          <li>Use AI to draft the onboarding checklist, then walk through it with the new hire in person.</li>
        </ol>

        <h2>The Bottom Line</h2>
        <p>
          AI will not find you a great technician. It will give you back the hours you were spending on posts, scheduling, and paperwork, so you can spend them talking to candidates and training the ones you hire. If the shop has too much work and too few hands, our <a href="/blog/ai-automation-vs-hiring-oregon-business">comparison of AI automation and hiring</a> may help you decide where the next dollar should go.
        </p>
        <p>
          We help trades businesses build their sites and lead systems, including careers pages. See our <a href="/success-kit/hvac">HVAC</a>, <a href="/success-kit/plumbers">plumber</a>, and <a href="/success-kit/electricians">electrician</a> pages, or <a href="/contact">contact us</a>.
        </p>

        <h2>Related Reading</h2>
        <ul>
          <li><a href="/blog/ai-staff-scheduling-labor-cost-oregon-businesses">AI Staff Scheduling and Labor Costs for Oregon Businesses</a></li>
          <li><a href="/blog/what-ai-can-and-cannot-do-business-2026">What AI Can and Cannot Do for Your Business in 2026</a></li>
          <li><a href="/industries/home-services">AI and Marketing for Home Services and Trades</a></li>
        </ul>
      </>
    ),
  },
  {
    slug: 'website-chat-assistant-trades',
    title: 'A Website Chat Assistant That Answers Homeowner Questions at 10 PM',
    metaTitle: 'Website Chat Assistant for Trades Businesses | Oregon',
    metaDescription:
      'A website chat assistant for trades can answer homeowner questions at 10 PM, capture the lead, and hand off to a person, without diagnosing or quoting prices.',
    date: 'November 1, 2026',
    publishDate: '2026-11-01',
    author: 'Winston',
    authorTitle: 'Head of AI Field Strategy',
    series: 'trades',
    excerpt:
      'Homeowners browse after dinner, not during business hours. A well-scoped chat assistant answers basic questions, captures the job, and hands off to you, while staying out of diagnosis and pricing.',
    heroImage: '/images/blog/trades/website-chat-assistant-trades.webp',
    content: (
      <>
        <p>
          A homeowner in Gladstone notices a slow drain at 10 PM, opens a few company websites, and wants an answer now. If nobody is there, many will send a form and move on to the next shop. A website chat assistant for a trades business can answer the basic questions, collect the details, and flag the lead for you in the morning, or wake someone up when it is truly urgent. The key is scope: it should know your business well and know exactly what it must not do.
        </p>
        <p>
          This post builds on the series opener, <a href="/blog/ai-for-plumbers-electricians-hvac-guide">AI for plumbers, electricians, and HVAC companies</a>, and pairs with our earlier posts on phones and after-hours coverage.
        </p>

        <h2>What Can a Chat Assistant Answer Well?</h2>
        <p>
          The things a good assistant handles are the questions your office answers fifty times a month:
        </p>
        <ul>
          <li>Which services you offer, and which you do not</li>
          <li>Which cities and neighborhoods you serve</li>
          <li>Your published hours and whether you offer emergency service</li>
          <li>How scheduling works and what information you need to book</li>
          <li>What to have ready before the tech arrives</li>
          <li>Your license information and insurance statements, if you have given them to it</li>
        </ul>
        <p>
          It can only answer from what you give it. The assistant is trained on your real services, areas, and policies, written by you. If a fact is not in its materials, it should say so and offer to connect the visitor with a person.
        </p>

        <h2>What Must It Never Do?</h2>
        <h3>Never diagnose</h3>
        <p>
          &quot;My furnace is making a clicking noise, what is wrong?&quot; invites a confident guess. A chat assistant should not guess. Diagnosis is for licensed technicians looking at the equipment. The right answer is to collect details and offer to book a visit.
        </p>
        <h3>Never handle safety emergencies in chat</h3>
        <p>
          If someone mentions a gas smell, sparking or burning from an outlet or panel, smoke, or a carbon monoxide alarm, the assistant should switch to a fixed script: leave the home, call the gas utility or 911 from outside, and do not troubleshoot. It should not ask follow-up questions or offer tips. Test this script before launch, and again after every update. Our post on <a href="/blog/ai-after-hours-emergency-triage-plumbers">after-hours emergency triage</a> explains how to build escalation for ordinary urgent jobs like burst pipes.
        </p>
        <h3>Never promise prices or timelines you have not published</h3>
        <p>
          If your website already publishes a service call fee or a window, the assistant may repeat it exactly. Otherwise it should say that pricing depends on the job and offer a visit or call back. A casual number in a chat can become a dispute on the doorstep.
        </p>
        <h3>Never pretend to be human</h3>
        <p>
          Say it is an automated assistant. Visitors tolerate a bot that is honest about being one far better than one that is not.
        </p>

        <h2>How Does It Capture and Hand Off the Lead?</h2>
        <p>
          A good chat assistant does a short, friendly intake:
        </p>
        <ol>
          <li>What is going on, in the visitor&apos;s own words</li>
          <li>The service address, or at least the city, to confirm you serve it</li>
          <li>Whether it is urgent</li>
          <li>Best contact method and name</li>
          <li>Optionally, a photo upload</li>
        </ol>
        <p>
          That goes straight to your phone, email, or field-service software as a clean lead. Speed still matters: our post on the <a href="/blog/ai-speed-to-lead-5-minute-rule">5-minute rule</a> explains why a quick human reply after the chat makes the difference. For leads that arrive after hours, see <a href="/blog/ai-capture-leads-after-hours-small-business">capturing leads after hours with AI</a>.
        </p>
        <p>
          If you already use an AI phone answering setup, the chat assistant should follow the same rules and the same facts. The post on <a href="/blog/ai-receptionist-plumbing-company">what an AI receptionist can and can&apos;t handle</a> is a good template for scope.
        </p>

        <h2>How Do You Set One Up Without Making a Mess?</h2>
        <ol>
          <li><strong>Write the fact sheet.</strong> Services, areas, hours, how booking works, what you do not do, and what to say when it does not know.</li>
          <li><strong>Write the red-line rules.</strong> No diagnosis, no unpublished prices, safety script, handoff triggers.</li>
          <li><strong>Test it hard.</strong> Ask it everything a customer might, including trick questions and angry ones. Try to get it to promise a price.</li>
          <li><strong>Launch quietly,</strong> then read every transcript for the first few weeks.</li>
          <li><strong>Update the fact sheet</strong> whenever hours, services, or areas change. A chat assistant that quotes last year&apos;s hours is worse than none.</li>
        </ol>

        <h2>Will It Replace Your Phone and Your Staff?</h2>
        <p>
          No. Many homeowners still prefer to call, especially in an emergency, and your site should always show a click-to-call number. The chat assistant is an extra door that stays open after hours. It captures the visitors who would otherwise leave. For the broader tradeoffs, see <a href="/blog/ai-customer-service-systems-oregon-businesses">AI customer service systems for Oregon businesses</a>.
        </p>

        <h2>Privacy and Record Keeping</h2>
        <p>
          Chat transcripts contain names, addresses, and details about someone&apos;s home. Tell visitors the chat is recorded, and put that in your privacy policy. Limit who can read transcripts, and ask the vendor how data is stored and whether it is used to train their models. If you are unsure about notice requirements, ask your attorney.
        </p>

        <h2>Is It Worth It for a Small Shop?</h2>
        <p>
          It depends on your traffic and your follow-up habits. A chat assistant helps most when you already get steady website visits and miss leads after hours. It helps least when the website itself does not convert, in which case fix that first. We explain how in <a href="/blog/why-your-website-is-not-generating-leads">why your website is not generating leads</a>. Anyone who guarantees a number of extra leads from a chat widget is guessing.
        </p>
        <p>
          We build chat assistants and the sites around them for trades companies. See the <a href="/success-kit/plumbers">plumber</a>, <a href="/success-kit/electricians">electrician</a>, and <a href="/success-kit/hvac">HVAC</a> lead systems, learn about our <a href="/ai-systems">AI systems</a>, or <a href="/contact">contact us</a> to talk it through.
        </p>

        <h2>Related Reading</h2>
        <ul>
          <li><a href="/blog/missed-calls-cost-trades-business-ai-answering">Every Missed Call Is a Job for Your Competitor: AI Call Answering for the Trades</a></li>
          <li><a href="/blog/ai-text-messaging-home-service-customers">On-My-Way Texts, Reminders, and Follow-Ups: AI Text Messaging for Service Businesses</a></li>
          <li><a href="/blog/ai-risks-small-business-responsible-use-checklist">AI Risks for Small Business: A Responsible Use Checklist</a></li>
        </ul>
      </>
    ),
  },
  {
    slug: 'chatgpt-prompts-trades-office',
    title: 'ChatGPT for the Trades Office: Prompts That Save Real Time',
    metaTitle: 'ChatGPT Prompts for the Trades Office | Oregon',
    metaDescription:
      'ChatGPT prompts for the trades office: twelve copy-and-paste examples for review replies, estimates, job posts, emails, and SOPs, plus a privacy caution.',
    date: 'November 2, 2026',
    publishDate: '2026-11-02',
    author: 'Winston',
    authorTitle: 'Head of AI Field Strategy',
    series: 'trades',
    excerpt:
      'Twelve practical prompts for the person running the office of a plumbing, electrical, or HVAC shop, with a few rules for using ChatGPT safely and getting drafts you can actually send.',
    heroImage: '/images/blog/trades/chatgpt-prompts-trades-office.webp',
    content: (
      <>
        <p>
          Most trades owners who try ChatGPT use it once, get something generic, and go back to doing paperwork at the kitchen table. The problem is rarely the tool. It is the prompt. These ChatGPT prompts for the trades office are written for the work that actually fills your desk: replying to reviews, cleaning up estimates, writing job posts, answering customer emails, and drafting procedures. The same prompts work in Claude or Gemini.
        </p>
        <p>
          This is the practical end of our series on <a href="/blog/ai-for-plumbers-electricians-hvac-guide">AI for plumbers, electricians, and HVAC companies</a>. A reminder before we start: AI drafts, a human approves. Read everything before it goes out under your name.
        </p>

        <h2>How Do You Get a Useful Answer From ChatGPT?</h2>
        <p>
          Four habits make the difference:
        </p>
        <ul>
          <li><strong>Say who you are and who it is for.</strong> &quot;I run a plumbing company near Oregon City writing to a homeowner&quot; changes the whole answer.</li>
          <li><strong>Give it the facts.</strong> It cannot know your hours, services, or policies. If you do not supply them, it may invent them.</li>
          <li><strong>Describe the voice.</strong> &quot;Plain, friendly, no hype, no emojis, under 100 words.&quot;</li>
          <li><strong>Ask for a draft, then revise.</strong> Reply with &quot;shorter,&quot; &quot;warmer,&quot; or &quot;remove the second paragraph.&quot;</li>
        </ul>

        <h2>What Prompts Actually Save Time?</h2>
        <p>
          Replace the bracketed parts with your own details. Each one is a starting point, not a script.
        </p>
        <ol>
          <li>
            <strong>Reply to a five-star review.</strong> <em>&quot;Write a warm, two-sentence reply to this review from a customer. Our company is [name], serving [areas]. Mention the tech by first name, [name]. Do not offer anything or make promises. Review: [paste review].&quot;</em>
          </li>
          <li>
            <strong>Reply to a negative review.</strong> <em>&quot;Draft a calm, professional reply to this one-star review. Apologize for the experience without admitting fault we have not verified, invite them to call [phone], and keep it under 80 words. Review: [paste].&quot;</em> A person should check the facts before this one posts. Our post on <a href="/blog/ai-reputation-management-small-business">AI reputation management</a> covers the full approach.
          </li>
          <li>
            <strong>Clean up a tech&apos;s estimate notes.</strong> <em>&quot;Turn these rough notes into a clear customer-friendly description of the work. Do not add any work, parts, or prices that are not in the notes. Notes: [paste].&quot;</em> See <a href="/blog/ai-faster-estimates-trades">faster quotes with AI</a> for the larger workflow, where you set the prices.
          </li>
          <li>
            <strong>Write a follow-up for an unsold estimate.</strong> <em>&quot;Write a short, helpful follow-up email to a homeowner who received a quote [number] days ago for [job]. Offer to answer questions, do not pressure, and include no discount.&quot;</em> Cadence ideas are in <a href="/blog/ai-follow-up-unsold-estimates-contractors">AI follow-up for unsold estimates</a>.
          </li>
          <li>
            <strong>Draft a job posting.</strong> <em>&quot;Write a clear job post for a [role] at our [trade] company in [area]. Include these facts only: [schedule, tools, vehicle, training, pay range you will state]. Plain language, no buzzwords.&quot;</em> Check current Oregon posting requirements before you publish.
          </li>
          <li>
            <strong>Answer a customer email.</strong> <em>&quot;Here is a customer&apos;s email and the facts of our policy. Draft a courteous reply that uses only these facts. If the email asks for something we have not covered, say we will follow up by phone. Email: [paste]. Policy: [paste].&quot;</em>
          </li>
          <li>
            <strong>Create a Google Business Profile post.</strong> <em>&quot;Write a 60-word Google post about a [job type] completed in [city]. Facts: [notes without customer name or address]. Include a call to action to call [phone].&quot;</em> More on keeping your profile current in <a href="/blog/google-business-profile-trades-ai">Google Business Profile for the trades</a>.
          </li>
          <li>
            <strong>Build a safety talk outline.</strong> <em>&quot;Create an outline for a 10-minute toolbox talk on [topic, such as ladder safety]. Include discussion questions. Mark any statement that depends on a specific regulation so I can verify it.&quot;</em> Verify against your actual safety program and the applicable rules, since an AI outline is not a compliance document.
          </li>
          <li>
            <strong>Turn a procedure into an SOP.</strong> <em>&quot;Here is how we handle [process, like closing out a job] in my own words. Turn it into a numbered checklist a new hire could follow. Flag any steps that seem unclear.&quot;</em>
          </li>
          <li>
            <strong>Write a seasonal customer email.</strong> <em>&quot;Write a short email to past customers reminding them to schedule a [spring AC check or fall furnace check] before the busy season. Friendly, no hard sell, no prices.&quot;</em> Pair it with the ideas in <a href="/blog/hvac-maintenance-plan-renewals-ai">AI reminders for HVAC maintenance plans</a>.
          </li>
          <li>
            <strong>Summarize a long supplier or code document.</strong> <em>&quot;Summarize this document in plain English in ten bullets, and list anything I should double-check with the source.&quot;</em> Never rely on the summary for code requirements. Read the source.
          </li>
          <li>
            <strong>Prepare for a hard conversation.</strong> <em>&quot;I need to tell a customer that a job will cost more than we first estimated because [reason]. Suggest a respectful way to open the conversation and three likely questions they will ask.&quot;</em> Then make the call yourself.
          </li>
        </ol>

        <h2>What Should You Never Paste Into ChatGPT?</h2>
        <p>
          Be careful with what you put in. A few rules of thumb:
        </p>
        <ul>
          <li><strong>Customer names, addresses, phone numbers, and account details.</strong> Replace them with placeholders like &quot;the customer&quot; before pasting.</li>
          <li><strong>Payment information, passwords, and anything financial.</strong> Never.</li>
          <li><strong>Employee or applicant personal records.</strong> Keep these out.</li>
          <li><strong>Anything under an NDA or contract confidentiality.</strong></li>
        </ul>
        <p>
          Understand the account you are using. Personal and business accounts can handle your data differently, and settings control whether your conversations are used to improve models. Read the current terms and settings for your plan. We cover this in more depth in our <a href="/blog/ai-risks-small-business-responsible-use-checklist">responsible AI use checklist</a>.
        </p>

        <h2>What Is ChatGPT Bad At for a Trades Business?</h2>
        <ul>
          <li><strong>Diagnosing problems.</strong> It does not know what is in a customer&apos;s wall. Never use it to troubleshoot gas leaks, sparking or burning electrical, or carbon monoxide. Those mean leave the home and call the gas utility or 911.</li>
          <li><strong>Pricing.</strong> It will make up numbers. Your prices come from you.</li>
          <li><strong>Code and licensing details.</strong> Verify against the actual rule or your licensing authority.</li>
          <li><strong>Your facts.</strong> Hours, service areas, license number, and policies must be supplied by you and checked after.</li>
        </ul>
        <p>
          For a fuller sense of its limits, read <a href="/blog/what-ai-can-and-cannot-do-business-2026">what AI can and cannot do for your business</a>.
        </p>

        <h2>Save Your Best Prompts</h2>
        <p>
          When a prompt produces something you would actually send, save it in a shared document called something like &quot;Office Prompts.&quot; Add your voice instructions and a short fact sheet at the top, with your services, areas, hours, and policies, so you can paste them in at the start of any session. That one habit turns scattered experiments into a repeatable system, and it makes handoffs easy when someone new joins the office.
        </p>
        <p>
          If you want these workflows built into your phones, texts, and follow-up so nobody has to remember the prompt, see our <a href="/success-kit/plumbers">plumber</a>, <a href="/success-kit/electricians">electrician</a>, and <a href="/success-kit/hvac">HVAC</a> lead systems, or <a href="/contact">contact us</a>.
        </p>

        <h2>Related Reading</h2>
        <ul>
          <li><a href="/blog/most-powerful-ai-automations-portland-metro">5 Powerful AI Automations for Portland Metro Businesses</a></li>
          <li><a href="/blog/more-five-star-reviews-trades-ai">Getting More Five-Star Reviews After Every Service Call, Automatically</a></li>
          <li><a href="/blog/ai-nephew-setup-costing-oregon-businesses">What an Unmanaged AI Setup Can Cost an Oregon Business</a></li>
        </ul>
      </>
    ),
  },
]
