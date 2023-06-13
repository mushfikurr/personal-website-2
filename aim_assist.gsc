//Call of Duty Black ops 1 Aim Assist

#include maps\_utility;
#include common_scripts\utility;

init()
{
    if ( GetDvar( #"zombiemode" ) == "1" )
	{
		level thread onPlayerConnect();
	}
}

onPlayerConnect()
{
    level endon( "end_game" );
	for ( ;; )
	{
        if(isDefined(level.player_out_of_playable_area_monitor) && level.player_out_of_playable_area_monitor) //disable death barriers
			level.player_out_of_playable_area_monitor = 0;
        if(isDefined(level.player_too_many_weapons_monitor) && level.player_too_many_weapons_monitor) //disable too many weapons check
			level.player_too_many_weapons_monitor = 0;

		level waittill( "connected", player );
        player thread AimAssist();
		player thread onSpawn();
	}
}

onSpawn()
{
	self endon( "disconnect" );
    self waittill( "spawned_player" );
    wait 5;
    iprintln( "aim assist enabled" );
}

AimAssist()
{
	level endon("end_game");
	self endon("disconnect");
	for(;;)
	{

		if(isDefined( level.zombiemode_using_deadshot_perk ) && level.zombiemode_using_deadshot_perk && self hasperk("specialty_deadshot")) //original perk check
			tag = "j_head";
		else
			tag = "j_spine4";

		view_pos = self GetWeaponMuzzlePoint();
		zombies = get_array_of_closest( view_pos, getaispeciesarray("axis", "all"), undefined, undefined, undefined );		
		range_squared = 500 * 500;
		for ( i = 0; i < zombies.size; i++ )
		{
			if ( !IsDefined( zombies[i] ) || !IsAlive( zombies[i] ) )
			{
				continue;
			}
			enemy_origin = zombies[i].origin;
			test_range_squared = DistanceSquared( view_pos, enemy_origin );
			if ( test_range_squared < range_squared )
			{
				if(zombies[i] player_can_see_me(self))
				{
					if(self adsButtonPressed() && self playerADS() < 0.6 )
					{
						while( self playerADS() > 0 && self playerADS() < 1 && self adsButtonPressed())
						{
							if(IsAlive( zombies[i] ))
							{
								self setPlayerAngles(vectorToAngles((zombies[i] getTagOrigin(tag)) - (self getEye())));
							}
							wait .05;
						}
						while( self playerADS() > .9 && self adsButtonPressed() )
						{
							wait .05;
						}
						break;
					}
				}
			}
		}
		wait 0.05;
	}
}

player_can_see_me( player )
{
    playerangles = player getplayerangles();
    playerforwardvec = anglesToForward( playerangles );
    playerunitforwardvec = vectornormalize( playerforwardvec );
    banzaipos = self.origin;
    playerpos = player getorigin();
    playertobanzaivec = banzaipos - playerpos;
    playertobanzaiunitvec = vectornormalize( playertobanzaivec );
    forwarddotbanzai = vectordot( playerunitforwardvec, playertobanzaiunitvec );
    if ( forwarddotbanzai >= 1 )
    {
        anglefromcenter = 0;
    }
    else if ( forwarddotbanzai <= -1 )
    {
        anglefromcenter = 180;
    }
    else
    {
        anglefromcenter = acos( forwarddotbanzai );
    }
    playerfov = getDvarFloat( "cg_fov" );
    banzaivsplayerfovbuffer = getDvarFloat( "g_banzai_player_fov_buffer" );
    if ( banzaivsplayerfovbuffer <= 0 )
    {
        banzaivsplayerfovbuffer = 0.2;
    }
	distance = self check_distance(player);

	playercanseeme = anglefromcenter <= ( ( playerfov * distance ) * ( 1 - banzaivsplayerfovbuffer ) );
	return playercanseeme;
}

check_distance(player)
{
	if(distance(self.origin, player.origin) < 90)
		return .45;
	if(distance(self.origin, player.origin) <= 100)
		return .4;
	if(distance(self.origin, player.origin) <= 150)
		return .3;
	if(distance(self.origin, player.origin) <= 200)
		return .25;
	if(distance(self.origin, player.origin) <= 250)
		return .225;
	if(distance(self.origin, player.origin) <= 300)
		return .2;
	if(distance(self.origin, player.origin) <= 350)
		return .175;
	if(distance(self.origin, player.origin) <= 400)
		return .15;
	return .125;
}