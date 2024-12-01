import React from "react";
import {
  IconAffiliateFilled,
  IconAwardFilled,
  IconChevronsRight,
  IconEye,
  IconEyeOff,
  IconFishHookOff,
  IconHeartHandshake,
  IconHorseshoe,
  IconKarate,
  IconLink,
  IconSchool,
  IconSpy,
  IconUsersGroup,
  IconVolume3,
} from "@tabler/icons-react";
import Block from "./components/block";

export default function Home() {
  return (
    <div className="bg-[#0c132d] h-screen">
      <h1 className="text-4xl text-center ">The 48 laws of power</h1>
      <div className="flex flex-col p-2 justify-center items-start">
        <div className="grid bg-[#686666] grid-cols-1 sm:grid-cols-2 max-[666px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 justify-items-center w-full">
          <Block
            number={<p className="text-red">1</p>}
            Icon={<IconSchool size={50} />}
            title={
              <p>
                Never outshine the
                <span className="text-red"> master</span>
              </p>
            }
          />
          <Block
            number={<p className="text-red">2</p>}
            Icon={<IconKarate size={50} />}
            title="Never put too much trust in friends, learn to use enemies"
          />
          <Block
            number={<p className="text-red">3</p>}
            Icon={<IconEyeOff size={50} />}
            title="Always conceal your intentions"
          />
          <Block
            number={<p className="text-red">4</p>}
            Icon={<IconVolume3 size={50} />}
            title="Always say less than necessary"
          />
          <Block
            number={<p className="text-red">5</p>}
            Icon={<IconAwardFilled size={50} />}
            title="Guard your reputation with your life"
          />
          <Block
            number={<p className="text-red">6</p>}
            Icon={<IconUsersGroup size={50} />}
            title="Seek attention stand out"
          />
          <Block
            number={<p className="text-red">7</p>}
            Icon={<IconAffiliateFilled size={50} />}
            title="Get others to do the work, But always take the credit"
          />
          <Block
            number={<p className="text-red">7</p>}
            Icon={<IconFishHookOff size={50} />}
            title="Make others to come to you, Use bait if necessary"
          />
          <Block
            number={<p className="text-red">9</p>}
            Icon={<IconChevronsRight size={50} />}
            title="Win through your actions, never through augument"
          />
          <Block
            number={<p className="text-red">10</p>}
            Icon={<IconHorseshoe size={50} />}
            // title="Seek attention stand out"
            title={
              <p>
                Avoid the
                <span className="text-red"> unhappy </span>
                or unlucky
              </p>
            }
          />
          <Block
            number={<p className="text-red">11</p>}
            Icon={<IconLink size={50} />}
            title={
              <p>
                Learn to keep people
                <span className="text-red"> dependent </span>
                on you
              </p>
            }
          />
          <Block
            number={<p className="text-red">12</p>}
            Icon={<IconHeartHandshake size={50} />}
            title={
              <p>
                Use selective honesty and generosity to
                <span className="text-red"> disarm </span>
                on you
              </p>
            }
          />
          <Block
            number={<p className="text-yellow">13</p>}
            Icon={<IconEye size={50} />}
            title={
              <p>
                Get help by
                <span className="text-yellow"> appleaing </span>
                to people&apos;s self interest
              </p>
            }
          />
          <Block
            number={<p className="text-yellow">14</p>}
            Icon={<IconSpy size={50} />}
            title={
              <p>
                Pose as a friend, work as a
                <span className="text-yellow"> spy </span>
                on you
              </p>
            }
          />
          <Block
            number={<p className="text-yellow">15</p>}
            Icon={<IconSpy size={50} />}
            title={
              <p>
                <span className="text-yellow"> Crush </span>
                your enemy totally
              </p>
            }
          />
          <Block
            number={<p className="text-yellow">16</p>}
            Icon={<IconSpy size={50} />}
            title={
              <p>
                Raise your value through
                <span className="text-yellow"> scarcity </span>
              </p>
            }
          />
          <Block
            number={<p className="text-yellow">17</p>}
            Icon={<IconSpy size={50} />}
            title={
              <p>
                Cultivate an air of
                <span className="text-yellow"> unpredictibality</span>
              </p>
            }
          />   
          <Block
            number={<p className="text-yellow">18</p>}
            Icon={<IconSpy size={50} />}
            title={
              <p>
                Don&apos;t
                <span className="text-yellow"> isolate </span>
                fortress
              </p>
            }
          />
          <Block
            number={<p className="text-yellow">19</p>}
            Icon={<IconSpy size={50} />}
            title={
              <p>
                know who you&apos;re
                <span className="text-yellow"> dealing with </span>
                beware of who you offend
              </p>
            }
          />
          <Block
            number={<p className="text-yellow">20</p>}
            Icon={<IconSpy size={50} />}
            title={
              <p>
                Don&apos;t fully
                <span className="text-yellow"> commit </span>
                yourselt to anyone
              </p>
            }
          />
          <Block
            number={<p className="text-yellow">21</p>}
            Icon={<IconSpy size={50} />}
            title={
              <p>
                play a scuker to catch a sucker, seem
                <span className="text-yellow"> dumber </span>
                than you are
              </p>
            }
          />
          <Block
            number={<p className="text-yellow">22</p>}
            Icon={<IconSpy size={50} />}
            title={
              <p>
                use the
                <span className="text-yellow"> surrender </span>
                tactic
              </p>
            }
          />
          <Block
            number={<p className="text-yellow">23</p>}
            Icon={<IconSpy size={50} />}
            title={
              <p>
                <span className="text-yellow"> Concentrate </span>
                your forces
              </p>
            }
          />
          <Block
            number={<p className="text-yellow">24</p>}
            Icon={<IconSpy size={50} />}
            title={
              <p>
                Play the perfect
                <span className="text-yellow"> courties </span>
              </p>
            }
          />
          <Block
            number={<p className="text-red">25</p>}
            Icon={<IconSchool size={50} />}
            title={
              <p>
                <span className="text-red">Recreate </span>
                yourself
              </p>
            }
          />
          <Block
            number={<p className="text-red">26</p>}
            Icon={<IconSchool size={50} />}
            title={
              <p>
                Keep your
                <span className="text-red"> hands clean </span>
              </p>
            }
          />
          <Block
            number={<p className="text-red">27</p>}
            Icon={<IconSchool size={50} />}
            title={
              <p>
                Play on people&apos;s need to
                <span className="text-red"> believe </span>
              </p>
            }
          />
          <Block
            number={<p className="text-red">28</p>}
            Icon={<IconSchool size={50} />}
            title={
              <p>
                Enter action with
                <span className="text-red"> boldness </span>
              </p>
            }
          />
          <Block
            number={<p className="text-red">29</p>}
            Icon={<IconSchool size={50} />}
            title={
              <p>
                <span className="text-red"> Plan </span>
                all the way to en
              </p>
            }
          />
          <Block
            number={<p className="text-red">30</p>}
            Icon={<IconSchool size={50} />}
            title={
              <p>
                Make your achievements
                <span className="text-red"> seem effortless </span>
              </p>
            }
          />
          <Block
            number={<p className="text-red">31</p>}
            Icon={<IconSchool size={50} />}
            title={
              <p>
                Control the
                <span className="text-red"> options </span>
              </p>
            }
          />
          <Block
            number={<p className="text-red">32</p>}
            Icon={<IconSchool size={50} />}
            title={
              <p>
                tell people what they
                <span className="text-red"> want to hear </span>
              </p>
            }
          />
          <Block
            number={<p className="text-red">33</p>}
            Icon={<IconSchool size={50} />}
            title={
              <p>
                Find your opponent&apos;s
                <span className="text-red"> weakness </span>
                and insecurities
              </p>
            }
          />
          <Block
            number={<p className="text-red">34</p>}
            Icon={<IconSchool size={50} />}
            title={
              <p>
                Act like a<span className="text-red"> king </span>
                to be treated like one
              </p>
            }
          />
          <Block
            number={<p className="text-red">35</p>}
            Icon={<IconSchool size={50} />}
            title={
              <p>
                Master the art of <span className="text-red"> timing </span>
              </p>
            }
          />
          <Block
            number={<p className="text-red">36</p>}
            Icon={<IconSchool size={50} />}
            title={
              <p>
                Act like a<span className="text-red"> ignore </span>
                things you cannot have
              </p>
            }
          />
          <Block
            number={<p className="text-yellow">37</p>}
            Icon={<IconSpy size={50} />}
            title={
              <p>
                Create compelling
                <span className="text-yellow"> spectacles </span>
              </p>
            }
          />
          <Block
            number={<p className="text-yellow">38</p>}
            Icon={<IconSpy size={50} />}
            title={
              <p>
                Think as you like but
                <span className="text-yellow"> behave </span>
                like others
              </p>
            }
          />
          <Block
            number={<p className="text-yellow">39</p>}
            Icon={<IconSpy size={50} />}
            title={
              <p>
                <span className="text-yellow">Stir up </span>
                waters to catch fish
              </p>
            }
          />
          <Block
            number={<p className="text-yellow">40</p>}
            Icon={<IconSpy size={50} />}
            title={
              <p>
                Avoid taking
                <span className="text-yellow"> freebies </span>
                from people
              </p>
            }
          />
          <Block
            number={<p className="text-yellow">41</p>}
            Icon={<IconSpy size={50} />}
            title={
              <p>
                Avoid stepping into
                <span className="text-yellow"> great man&apos;s </span>
                shoes
              </p>
            }
          />
          <Block
            number={<p className="text-yellow">42</p>}
            Icon={<IconSpy size={50} />}
            title={
              <p>
                Strike the
                <span className="text-yellow"> sheperd </span>
                and sheep will scatter
              </p>
            }
          />
          <Block
            number={<p className="text-yellow">43</p>}
            Icon={<IconSpy size={50} />}
            title={
              <p>
                work on the
                <span className="text-yellow"> hearts and minds </span>
                of others
              </p>
            }
          />
          <Block
            number={<p className="text-yellow">44</p>}
            Icon={<IconSpy size={50} />}
            title={
              <p>
                Disarm and infuriate with the
                <span className="text-yellow"> mirror effect </span>
              </p>
            }
          />
          <Block
            number={<p className="text-yellow">45</p>}
            Icon={<IconSpy size={50} />}
            title={
              <p>
                Preach change, but never
                <span className="text-yellow"> reform too much at once </span>
              </p>
            }
          />
          <Block
            number={<p className="text-yellow">46</p>}
            Icon={<IconSpy size={50} />}
            title={
              <p>
                Never appear
                <span className="text-yellow"> too perfect </span>
              </p>
            }
          />
          <Block
            number={<p className="text-yellow">47</p>}
            Icon={<IconSpy size={50} />}
            title={
              <p>
                Strike the
                <span className="text-yellow"> Don't go past </span>
                the mark you aimed for know when to stop
              </p>
            }
          />
          <Block
            number={<p className="text-yellow">48</p>}
            Icon={<IconSpy size={50} />}
            title={
              <p>
                Assume
                <span className="text-yellow"> formlessness </span>
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
}
